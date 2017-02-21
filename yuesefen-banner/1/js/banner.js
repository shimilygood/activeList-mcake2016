/*banner*/

var S={i:true,num:1};
	/*执行动画*/
	S.animate=function(){
		var arr=[1,2,3];
		$(".switch").removeClass("a-ring");
    	setTimeout(function(){S.jiangShow()},100);
    	$(".hat").addClass("a-swing");
		$(".face img").animate({opacity:0},0,function(){
			$(".face img").attr("src","images/banner/face-"+arr[S.num]+".png").animate({opacity:1},1000);
		});
		$(".handsLeft").addClass("a-handsLeft");
		$(".handsRight").addClass("a-handsRight");
		setTimeout(function(){
			S.i=true;
    		$(".switch").addClass("a-ring");
			$(".hat").removeClass("a-swing");
			$("div.jijiang").children("img").eq(0).show().siblings().hide();
			$(".handsLeft").removeClass("a-handsLeft");
			$(".handsRight").removeClass("a-handsRight");
		},1200);
	}

	 /*挤酱*/
	 S.jiangShow=function(){
            var i=0;
            function Animate(){   /*设置动画*/
                i++;
                if(i<4){ 
                    setTimeout(function(){
                        $("div.jijiang").children("img").eq(i).show().siblings().hide();
                        Animate(); //内部回调
                    },50);
                }
            }
            Animate();  /*执行一次动画,否则其他动画不隐藏*/
     }
       /* jiangShow();  //立刻执行一次*/


       	/**挤我交换表情*/
     S.switchFun=function(){  
       		if(S.i!=true){   /*挤压过程中不可再挤*/
				return;
		    }else{
		    	S.i=false;
		    	if(S.num>2){
		    		S.num=0; S.animate();
		    	}else{  
			    	S.animate();
				}
				S.num++;
		    }
      }

