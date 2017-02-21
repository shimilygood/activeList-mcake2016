$(function(){
	
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
           
           self.imgMove($(".text1 .txt"));
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

				self.imgMove($(".text2 .txt"));
			}
			
			else if(scrollTop>sTop3 && scrollTop<=2000){
	
				$(".diamonImg").animate({"left":"0"},1000);
				$(".diamonIntroduct2").animate({"right":"0"},1000);
				self.imgMove($(".text3 .txt"));
				self.imgMove($(".text4 .txt"));
			}
  
        },
        
       imgMove:function(ele){
       	   //console.log($(this).length)
       		ele.each(function(i){
       			//console.log(i)
	             var that=$(this);
		       (function (time,i) {
		            setTimeout(function(){
		                console.log(i);
		                console.log(that);
		                that.addClass("txt"+i);
		                //that.animate({"opacity":1,"top":"10%"},500);
		            },time);
		          
		       })((i+1)*500,i);
		    
	         });

       }


	}

	//执行函数
	$(function(){
		cake.init();
	});


});


