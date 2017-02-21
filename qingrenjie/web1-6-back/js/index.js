var maxtops,
    skrollrs,
    DocWidth = document.body.scrollWidth,
    winWidth=window.innerWidth,
    winHeight=window.innerHeight-0,
    DocHeight= window.innerWidth*7-winHeight;   //document.body.scrollHeight

function skrollrFun(){
     skrollrs = skrollr.init({
            forceHeight: false,
            smoothScrolling:true,
            smoothScrollingDuration:500,
            render: function(data) { //每一次渲染之后调用的函数
                maxtops = data.maxTop;
            }
      });
      //alert(maxtops);
      skrollrs.setScrollTop(maxtops);
      setTimeout(function(){
          skrollrs.refresh();
      },1000);
      
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
          $loading.fadeOut(500);
        },1000);
        $(".home-page .rose").animate({"opacity":'1'},500);
           //判断是否达到页面整体高度
           if(maxtops <= DocHeight){
                skrollrs.setScrollTop(DocHeight);
           }else{
                skrollrs.setScrollTop(maxtops);
           }
          
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

