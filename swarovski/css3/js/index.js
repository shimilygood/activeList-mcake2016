$(function(){
	var util = {
		getClient: function(){
			//  获取页面可视区域宽高
			var client = {};
			if (document.compatMode == "BackCompat")   
	        {  
	            client.clientWidth  = document.body.clientWidth;  
	            client.clientHeight = document.body.clientHeight;    
	        } else{
	            client.clientWidth = document.documentElement.clientWidth;
	            client.clientHeight = document.documentElement.clientHeight;

	        }  
			return client;
		}
	}

	//动画
	var cake = {
		myVideo:document.getElementById("video"),
		init: function(){
			this._scrollTop = 0;
			this._isPlaying = true;
			this.showMain();
			this.bindEvent(); //事件绑定函数
		},
		setScrollLayout:function(){

		},
		showMain: function(){  //初始化页面
			var self = this;
            $(window).scrollTop(0);
            self.myVideo.play();
            self.addFade($(".text1 .txt"));
        },
		bindEvent: function(){
			var self = this;
			var isPlaying=this._isPlaying
			$(window).scroll(function(){  //绑定滚动事件
				self.scrollFunc();
			});

			//var myVideo=document.getElementById("video");

			touch.on('.playBtn', 'tap', function(ev){
			   if(isPlaying){
					self.myVideo.pause();
					$(".vPlay").hide();
					$(".vPause").show();
					 isPlaying = false;
					
				}else{
					self.myVideo.play();
					$(".vPlay").show();
					$(".vPause").hide();
					isPlaying = true;
					setTimeout($(".playBtns").hide(),5000);
				}

			});
			

			touch.on('.playBtn', 'touchstart', function(ev){
				$(".playBtns").show();
			});
		},
		scrollFunc: function(){  //滚动时执行的函数
			var self = this;
			var sTop1 = $(".sTop1").offset().top; 
			var sTop2 = $(".sTop2").offset().top; 
			var sTop3 = $(".sTop3").offset().top; 
			var scrollTop = $(window).scrollTop();
			
			if(scrollTop>=sTop2 && scrollTop<sTop1){
				//console.log(11)
				//$(".section2-text");
				self.addFade($(".text2 .txt"));
			}
			
			else if(scrollTop>sTop3 && scrollTop<=2000){
				//console.log(333)
				self.addFade($(".text3 .txt"));
				$(".diamonImg").addClass("moveLeft");
				$(".diamonIntroduct2").addClass("moveRight");
				self.addFade($(".text4 .txt"));
			}
  
        },
        addFade:function(ele){
    	 ele.each(function(i){
              $(this).addClass('textMove'+(i+1));
        });
    }


	}

	//执行函数
	$(function(){
		cake.init();
	});


});


