$(function(){
	window.scrollTo(0,0);

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

        	$(".cake1").parent().animate({top:"0"},500,function(){
    			$(".cake2").parent().animate({right:"0"},500,function(){
    				$(".cake3").parent().animate({right:"0"},500);
    				$(".title3").parent().animate({left:"6%"},300);
    			})
    		});
        	
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
			$(".title4").parent().animate({left:"31%"},500);
			$(".cake4").parent().animate({left:"0"},500,function(){
				$(".title5").parent().animate({left:"53%"},500);
				$(".cake5").parent().animate({right:"0"},500,function(){
					$(".cake6").parent().animate({left:"0"},500,function(){
	    				$(".title7").parent().animate({left:"16%"},500);
	    				$(".cake7").parent().animate({left:"21%"},500,function(){
	    					$(".cake8").parent().animate({right:"0"},500);
	    					$(".title8").parent().animate({left:"45%"},500);
	    				});
	    				
	    			})
				});
    			
    		});
        }
	}

	//执行函数
	$(function(){
		cake.init();
	});


});