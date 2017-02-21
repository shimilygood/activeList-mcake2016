$(function(){
var Butterfly = {
        _canAnimateDown: true,
        _canAnimateUp: false,
        _canFade: true,
        pathA: {
            start: {x:65.18599700927734, y:1.685999870300293},
            end: {x:785.18603515625, y:465.2610168457031}
        },
        pathB:{
            start: {x:758, y:514.6220092773438},
            end: {x:801, y:1248}
        },
        init: function(){
            var self = this;

            this._isIE = !!document.all;
            this._ieVersion = this._getIEversion();
            this.butterfly = document.getElementById('butterfly');
            this.butterflyEl = this.butterfly.getElementsByTagName('div')[0];
            this.$flyLayer = $("#fly_layer");
            this.cakes = $(".butterFly-wrap div[data-delay]");

            this.doLayout();
            this.initEvents();
                         
            $(this.butterfly).delay(500).fadeIn('slow');
            this.setAnimateA();

            setTimeout(function(){
                self.doAnimateA();
            }, 2000);

        },
        _getClient: function(){
            var de = document.documentElement;
            var db = document.body;

            return {
                clientW: de.clientWidth || db.clientWidth || 0,
                clientH: de.clientHeight || db.clientHeight || 0,
                scrollTop: db.scrollTop || de.scrollTop || 0
            };
        },
        _getIEversion: function(){
            var ua = navigator.userAgent;
            var version = /MSIE (\d+\.\d+)/.exec(ua);
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

                this.butterfly.style.left = point.x - 10 + "px";
                this.butterfly.style.top = point.y - 10 + "px";
            }

            //this.$flyLayer.height($("#svg_path").attr('height'));

            this.cakes.each(function(){
                var delay = Number(this.getAttribute('data-delay')) + 's';
                this.style.webkitAnimationDelay = delay;
                this.style.animationDelay = delay;
            });
        },
        setAnimateA: function(){
            var self = this;
            if( this._ieVersion && this._ieVersion < 9 ){
                for(var i=0; i<4; i++){
                    setTimeout((function(i){
                        return function(){
                            var obj = {
                                opacity: 1
                            };
                            var cssObj = {};
                            var anmType = self.cakes.eq(i).attr('data-anim');
                            if( anmType == 'fly-down' ){
                                obj.marginTop = '0px';
                                cssObj.marginTop = '-250px';
                            }
                            if( anmType == 'fly-right' ){
                                obj.marginLeft = '0px';
                                cssObj.marginLeft = '200px';
                            }
                            self.cakes.eq(i).css(cssObj).animate(obj, 600);
                        }
                    })(i), Number(this.cakes.eq(i).attr("data-delay"))*1000 );
                }
            } else {
                this.cakes.slice(0, 4).each(function(){
                   $(this).addClass(this.getAttribute("data-anim")||"fadeIn");
                });
            }
        },
        setAnimateB: function(){
            var self = this;
            if( this._ieVersion && this._ieVersion < 9 ){
                for(var i=4; i<14; i++){
                    setTimeout((function(i){
                        return function(){
                            var obj = {
                                opacity: 1
                            };
                            var cssObj = {};
                            var anmType = self.cakes.eq(i).attr('data-anim');
                            if( anmType == 'fly-down' ){
                                obj.marginTop = '0px';
                                cssObj.marginTop = '-250px';
                            }
                            if( anmType == 'fly-right' ){
                                obj.marginLeft = '0px';
                                cssObj.marginLeft = '200px';
                            }
                            self.cakes.eq(i).css(cssObj).animate(obj, 600);
                        }
                    })(i), Number(this.cakes.eq(i).attr("data-delay"))*1000 );
                }
            } else {
                this.cakes.slice(4).addClass('fadeIn');
            }
        },
        doAnimateA: function(){
            var self = this;
            if( this._ieVersion && this._ieVersion < 9 ){
                $(this.butterfly).animate({
                    left: this.pathA.end.x,
                    top: this.pathA.end.y
                }, 2000, function(){
                    self.$flyLayer.css('z-index', '10');
               });
            } else {
                var path = document.getElementById('path_a');
                var pathLength = path.getTotalLength();

                var obj = {p: 0, x: -1};

                $(obj).animate({
                    p: pathLength,
                    x: 1
                }, {
                    step: function () {
                        var point = path.getPointAtLength(obj.p);
                        self.butterfly.style.left = point.x - 10 + 'px';
                        self.butterfly.style.top = point.y - 10 + 'px';
                        self.butterflyEl.style.webkitTransform = 'perspective(750px) scale(4) rotate3d(1,' + obj.x + ',0,75deg) translate3d(0px,0px,0px)';
                        self.butterflyEl.style.transform = 'perspective(750px) scale(4) rotate3d(1,' + obj.x + ',0,75deg) translate3d(0px,0px,0px)';
                    },
                    duration: 2000,
                    complete: function () {
                        self.$flyLayer.css('z-index', '10');
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

                var obj = {p: 0, x: 1};

                $(obj).animate({
                    p: pathLength,
                    x: -1
                }, {
                    step: function () {
                        var point = path.getPointAtLength(obj.p);
                        self.butterfly.style.left = point.x - 10 + 'px';
                        self.butterfly.style.top = point.y - 10 + 'px';
                        self.butterflyEl.style.webkitTransform = 'perspective(750px) scale(4) rotate3d(1,' + obj.x + ',0,75deg) translate3d(0px,0px,0px)';
                        self.butterflyEl.style.transform = 'perspective(750px) scale(4) rotate3d(1,' + obj.x + ',0,75deg) translate3d(0px,0px,0px)';
                    },
                    duration: 5000
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
                       self.butterfly.style.left = point.x - 10 + 'px';
                        self.butterfly.style.top = point.y - 10 + 'px';
                        self.butterflyEl.style.webkitTransform = 'perspective(750px) scale(4) rotate3d(1,' + obj.x + ',0,75deg) translate3d(0px,0px,0px)';
                        self.butterflyEl.style.transform = 'perspective(750px) scale(4) rotate3d(1,' + obj.x + ',0,75deg) translate3d(0px,0px,0px)';
                    },
                    duration: 5000
                });
            }
        },

        initEvents: function(){
            var self = this;
            var initTop = this._getClient().scrollTop;
            var cTop = $(".title5").offset().top;
          
            $(window).scroll(function() {
        
                var scrollTop = self._getClient().scrollTop;
               // console.log(scrollTop+"----"+initTop)
                if (scrollTop > initTop) {
                    if (scrollTop > 280) {
                        if( self._canFade ){
                            self.setAnimateB();
                            self._canFade = false;
                        }
                        self.setAnimateB();
                        if (self._canAnimateDown) {
                            self.doAnimateB();
                            self._canAnimateDown = false;
                            self._canAnimateUp = true;
                        }
                    }
                } else {
                    if (scrollTop < cTop) {

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