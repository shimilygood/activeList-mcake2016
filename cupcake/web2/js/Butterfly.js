$(function(){
var Butterfly = {
        _canAnimateDown: true,
        _canAnimateUp: false,
        pathA: {
            start: {x:84.18599700927734, y:28.68600082397461},
            end: {x:835.18603515625, y:345.6860046386719}
        },
        pathB:{
            start: {x:758, y:503},
            end: {x:811, y:1229}
        },
        init: function(){
            var self = this;

            this._isIE = !!document.all;
            this._ieVersion = this._getIEversion();
            this.butterfly = document.getElementById('butterfly');
            this.butterflyEl = this.butterfly.getElementsByTagName('div')[0];

            this.doLayout();
            this.initEvents();

            $(this.butterfly).delay(500).fadeIn('slow');

            setTimeout(function(){
                self.doAnimateA();
            }, 2000);

        },
        _getClient: function(){
            var docE = document.documentElement;
            var docB = document.body;

            return {
                clientW: docE.clientWidth || docB.clientWidth || 0,
                clientH: docE.clientHeight || docB.clientHeight || 0,
                scrollTop: docB.scrollTop || docE.scrollTop || 0
            };
        },
        _getIEversion: function(){
            var ua = navigator.userAgent;
            var version = /msie (\d+\.\d+)/i.exec(ua);
            if( version ){
                return parseFloat(version[1]);
            }

            return false;
        },
        doLayout: function() {
            if( this._ieVersion && this._ieVersion < 9 ){
                this.butterfly.style.left = this.pathA.start.x + "px";
                this.butterfly.style.top = this.pathA.start.y + "px";
            } else {
                var path = document.getElementById('path_a');
                var point = path.getPointAtLength(0);

                this.butterfly.style.left = point.x + "px";
                this.butterfly.style.top = point.y + "px";
            }

            $("#fly_layer").height($("#svg_path").attr('height'));
        },
        doAnimateA: function(){
            var self = this;
            if( this._ieVersion && this._ieVersion < 9 ){
                $(this.butterfly).animate({
                    left: this.pathA.end.x,
                    top: this.pathA.end.y
                }, 2000, function(){
                    $('#fly_layer').css('z-index', '10');
                });
            } else {
                var path = document.getElementById('path_a');
                var pathLength = path.getTotalLength();

                $({p: 0}).animate({
                    p: pathLength
                }, {
                    step: function (x) {
                        var point = path.getPointAtLength(x);
                        self.butterfly.style.left = point.x + 'px';
                        self.butterfly.style.top = point.y + 'px';
                    },
                    duration: 2000,
                    complete: function () {
                        $('#fly_layer').css('z-index', '10');
                    }
                });
            }

        },
        doAnimateB: function(){
            var self = this;

            if( this._ieVersion && this._ieVersion < 9 ){
                $(this.butterfly).css({
                    left: this.pathB.start.x,
                    top: this.pathB.start.y
                }).animate({
                    left: this.pathB.end.x,
                    top: this.pathB.end.y
                }, 2000);
            } else {

                var path = document.getElementById('path_b');
                var pathLength = path.getTotalLength();

                var obj = {p: 0, x: -1};

                $(obj).animate({
                    p: pathLength,
                    x: 1
                }, {
                    step: function () {
                        var point = path.getPointAtLength(obj.p);
                        self.butterfly.style.left = point.x + 'px';
                        self.butterfly.style.top = point.y + 'px';
                        self.butterflyEl.style.webkitTransform = 'perspective(750px) scale(3) rotate3d(1,' + obj.x + ',0,75deg) translate3d(0px,0px,0px)';
                    },
                    duration: 2000
                });
            }
        },

        reverseAnimateB: function(){
            var self = this;

            if( this._ieVersion && this._ieVersion < 9 ){
                $(this.butterfly).animate({
                    left: this.pathB.start.x,
                    top: this.pathB.start.y
                }, 2000);
            } else {
                var path = document.getElementById('path_b');
                var pathLength = path.getTotalLength();

                var obj = {p: pathLength, x: 1};

                $(obj).animate({
                    p: 0,
                    x: -1
                }, {
                    step: function () {
                        var point = path.getPointAtLength(obj.p);
                        self.butterfly.style.left = point.x + 'px';
                        self.butterfly.style.top = point.y + 'px';
                        self.butterflyEl.style.webkitTransform = 'perspective(750px) scale(4) rotate3d(1,' + obj.x + ',0,75deg) translate3d(0px,0px,0px)';
                    },
                    duration: 2000
                });
            }
        },

        initEvents: function(){
            var self = this;
            var initTop = this._getClient().scrollTop;

            $(window).scroll(function() {
                var scrollTop = self._getClient().scrollTop;
                //console.log(initTop+"--------"+scrollTop)
                if (scrollTop > initTop) {
                    if (scrollTop > 280) {
                        if (self._canAnimateDown) {
                            self.doAnimateB();
                            self._canAnimateDown = false;
                            self._canAnimateUp = true;
                        }
                    }
                } else {
                    if (scrollTop < 200) {
                        if (self._canAnimateUp) {
                            self.reverseAnimateB();
                            self._canAnimateUp = false;
                            self._canAnimateDown = true;
                        }
                    }
                }

                if( self._isIE ){
                    setTimeout(function(){
                        initTop = scrollTop;
                    }, 0);
                } else {
                    initTop = scrollTop;
                }

            });
        }
    }

    $(function(){
        Butterfly.init();
    });

});