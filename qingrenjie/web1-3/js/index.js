var maxtops;
var skrollrs;
function skrollrFun(){
     skrollrs = skrollr.init({
            forceHeight: false,
            smoothScrolling:true,
            smoothScrollingDuration:500,
           
            render: function(data) { //每一次渲染之后调用的函数
                //Log the current scroll position.
                //console.log(data.curTop);
                // this.setScrollTop(data.curTop, true);
                 //console.log(data.maxTop);
                 //alert(maxtops);
                maxtops = data.maxTop;
            }
      });
      //alert(maxtops);
      skrollrs.setScrollTop(maxtops);
      setTimeout(function(){
          skrollrs.refresh();
      },500);
      
}

$(function(){
  skrollrFun();
})

var $loading = $('#js_loading');
function execJs() {
  loadingAll();
//第一部分图片
  function loadingImgs(loadCallback){
    var $ele = $('.section3,.section2,.section1,.home-page').find('img'),
        len = $ele.length;
    loadImg($ele, 0,function(index){
        var $speed = $('#js_speed');
        $speed.html(Math.floor(((len - (len - index)) / len) * 100) + '%');
    },loadCallback);
  }


  //loading开始
  function loadingAll(){
    loadingImgs(function(){
        setTimeout(function(){
          //skrollrs.setScrollTop(maxtops);
          $loading.fadeOut(500);
        },1500);
        $(".home-page .rose").animate({"opacity":'1'},500);
         //alert(maxtops+"dd")
          skrollrs.setScrollTop(maxtops);
           //skrollrs.refresh();
          //setTimeout(function(){
          //alert(maxtops+"ee")

                //skrollrs.setScrollTop(maxtops);
              //  skrollrs.refresh();
          //},800);
          //alert(maxtops)
    });
  }

}

window.onload=function(){
     execJs();

	   scroll();

     $(function(){
        $(".record").click(function(){
          $(".lIcon img:first-child").toggle();
          $(".lIcon img:last-child").toggle();
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

