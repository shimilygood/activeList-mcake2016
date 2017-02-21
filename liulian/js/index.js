
var $gotobuy=$("span.goto"),
    $add=$("span.add"),
    $reduce=$("span.reduce"),
    $bangshu=$(".add_reduce i");

var Ect={
	init:function(){
		var swiper1 = new Swiper('.swiper1', {
	        spaceBetween: 30,
	        effect: 'fade',
	        autoplay : 2000,
			speed:800,
	        loop :true
	    });

	    var swiper2 = new Swiper('.swiper2', {
	        spaceBetween: 30,
	        effect: '"slide"',
	        autoplay : 3000,
			speed:1000,
	        loop :true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	    });
        Ect.bangshu();
        Ect.scrolling();
	      
	}
};



Ect.bangshu=function(){
		var n=1,max=5;
        /*
        *蛋糕磅数加
        */
        $add.click(function(){
            n++;
            if(n>max){ n=max;}
            else{
                if(n==4)n=5;
                $bangshu.html(n+"磅");
                $bangshu.data("num", n);
                //alert($(".add_reduce i").data('num'));
            }
        });

        /*
        *蛋糕磅数减
        */
        $reduce.click(function(){
            n--;
           if(n<1){ n=1;}
           else{
                if(n==4)n=3;
                $bangshu.html(n+"磅");
                $bangshu.data("num", n);
            }
        }); 
};


Ect.count=function(){
    /*
    *结算
    */
    $gotobuy.click(function(){
          var price=$("b.price").data('price');
          var num=$(".add_reduce i").data('num');
          //alert("总金额"+price*num);
    });
};



Ect.scrolling=function(){ 
    $(window).bind("load scroll",scrollFun);
    function scrollFun(){
        var ht=$(".section1 .words").offset().top,
            scrollTop = $(window).scrollTop();
        
        if(scrollTop>=ht){ 
            if($(".section2").hasClass("animate")){
                return false;
            }else{
                Ect.addFade($(".section2"));
            }

        }
    }
};

Ect.addFade=function(ele){
     ele.each(function(i){
          $(this).addClass('animate');
    });
};

window.onload=function(){
    window.scrollTo(0,0);
    Ect.init();
    Ect.count();  //结算  
}


