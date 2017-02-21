
window.onload=function(){

    $(".loading").fadeOut(1000,function(){
    	 $(".home-page .rose").animate({"opacity":'1'},500);
    });

     var height=$(document).height();
     var maxtops;
     var skrollrs = skrollr.init({
            forceHeight: false,
            smoothScrolling:true,
            smoothScrollingDuration:500,
            easing: {
              vibrate: function(p) {
                return Math.sin(p * 10 * Math.PI);
              }
            },
            render: function(data) { //每一次渲染之后调用的函数
                //Log the current scroll position.
                //console.log(data.curTop);
                // this.setScrollTop(data.curTop, true);
                 //console.log(data.maxTop);
                maxtops = data.maxTop;
            }
      });
     // alert(height);
      //alert(maxtops);
      skrollrs.setScrollTop(maxtops);
      setTimeout(function(){
             skrollrs.refresh();
      },1000);

	   scroll();

     $(function(){
        $(".record").click(function(){
          $(".lIcon img:first-child").hide();
          $(".lIcon img:last-child").show();
          $(".rIcon em").hide();
        });
     })
  	
    function scroll(){
      $(window).bind("load scroll touchend",scrollFun);
      function scrollFun(){
          var section1H=$(".section1 .words").offset().top,
              section2H=$(".section2 .record").offset().top;

          scrollTop = $(window).scrollTop();
          
          if(scrollTop<=section1H && scrollTop>=section2H){
        	  if($(".section1 .fade01").hasClass("fadeUp1")){
        		  return false;
        	  }else{
        		  addFade($(".section1 .fade"));
        	  }

          }else if(scrollTop<=section2H){
        	  if($(".section2 .fade01").hasClass("fadeUp1")){
        		  return false;
        	  }else{
        		  addFade($(".section2 .fade"));
        	  }
          }
      }
    }
     
    function addFade(ele){
    	 ele.each(function(i){
              $(this).addClass('fadeUp'+(i+1));
        });
    }

}


