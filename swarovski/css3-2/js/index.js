$(window).scrollTop(0);
window.onload=function(){

	var video='<video preload="auto" poster="images/video-poster.png" loop="loop" id="video" webkit-playsinline><source type="video/mp4" src="video/video_1.mp4"></source></video>';

	$(".videoBox").html(video);


  $(function(){

	//动画
	var cake = {
		myVideo:document.getElementById("video"),
		init: function(){
			this._scrollTop = 0;
			this._isPlaying = false;
			this.sTop1 = $(".sTop1").offset().top; 
			this.sTop2 = $(".sTop2").offset().top; 
			this.sTop3 = $(".sTop3").offset().top; 
			this.showMain();
			this.bindEvent(); //事件绑定函数
		},
		setScrollLayout:function(){

		},
		showMain: function(){  //初始化页面
			var $radio=$(".radio"),
				$bgCover=$(".bgCover"),
				$jing=$(".jing"),
				$Quan=$(".Quan"),
				$jingBtn=$(".jing-btn"),
				self = this;
            
           
            self.addFade($(".text1 .txt"));

            $radio.click(function(){
            	$jing.html('<img src="images/jing-1.png">');
            	$Quan.find("p").text("SORRY，奇沛吊坠已被领光!");
            	$bgCover.show();
            	$Quan.show();
            });
            $jingBtn.click(function(){
            	$bgCover.hide();
            	$Quan.hide();
            });

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
					setTimeout(function(){
						$(".playBtns").hide();
					},5000);
				}

			});
			

			touch.on('.playBtn', 'touchstart', function(ev){
				$(".playBtns").show();
			});
		},
		scrollFunc: function(){  //滚动时执行的函数
			var self = this;
			
			var scrollTop = $(window).scrollTop();
			
			if(scrollTop>=this.sTop2 && scrollTop<this.sTop1){
				//console.log(11)
				//$(".section2-text");
				self.addFade($(".text2 .txt"));
			}
			
			else if(scrollTop>this.sTop1 && scrollTop<=2000){
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

}
