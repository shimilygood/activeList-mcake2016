$(function(){
	$(window).scrollTop(0);
	

	//动画
	var cake = {
		init: function(){
			this._scrollTop = 0;
			// this._client = util.getClient();
			this.showMain();
			this.bindEvent(); //事件绑定函数
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
        animateShow:function(){
        	 for(var i=1; i<4;i++){
            	(function(time, i){
					setTimeout(function(){
						if(i==1){
							$('.cake'+i).addClass("flyUp");
						}else if(i==4){
							this.animateShow()=null;
						}
						else{
							$('.cake'+i).addClass("flyRight");
							$('.title'+i).addClass("flyRight");
						}
					}, time);
					console.log(i)
				})((i + 1) * 500, i);

            }
        },
		showMain: function(){  //初始化页面
            this.animateShow();
           // alert(5)
        },
		bindEvent: function(){
			var self = this;
			$(window).scroll(function() {  //绑定滚动事件
				 var scrollTop =  self._getClient().scrollTop,
				     cakeTop = $(".cake2").offset().top;
				 	 //console.log(scrollTop);
				 	 if(scrollTop>cakeTop){
				 	 	self.scrollFunc();
				 	 }
			});

		},
		scrollFunc: function(){  //滚动时执行的函数

			for(var i=4; i<9;i++){
            	(function(time, i){
            		$('.cake5').addClass("flyRight");
					setTimeout(function(){
						if(i==4||i==6){
							$('.cake'+i).addClass("flyLeft");
							$('.title'+i).addClass("flyLeft");
						}else{
							$('.cake'+i).addClass("flyRight");
							$('.title'+i).addClass("flyRight");
						}
					}, time);
					//console.log(time)
				})((i + 1) * 150, i);
            }
        }
	}

	//执行函数
	$(function(){
		cake.init();
	});


});