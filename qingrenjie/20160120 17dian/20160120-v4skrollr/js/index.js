$(function(){
	var height=$(document).height();
	//$("html,body").animate({"scrollTop": height}, 0); 
	
	
    window.scrollTo(0,height);
     var skrollrs = skrollr.init({
        forceHeight: false,
        easing: {
            sin: function(p) {
                console.log(p);
                return (Math.sin(p * Math.PI * 2 - Math.PI/2) + 1) / 2;
            },
            cos: function(p) {
                return (Math.cos(p * Math.PI * 2 - Math.PI/2) + 1) / 2;
            }
        }
    });
    setTimeout(function(){
        skrollrs.refresh();
    },1000);

	
});


window.onload=function(){
    //window.location.href='#bottom';
	
	var width=$(document).width();

	function execJs(){
		$(".fade").css('opacity',1);

	}

	(function scroll(){
		$(window).bind("load scroll touchend",scrollFun);
		function scrollFun(){
			var section1H=$(".section1 .words").offset().top,
				section2H=$(".section2 .record").offset().top;

				scrollTop = $(window).scrollTop();
			if(scrollTop<=section1H && scrollTop>=section2H){
				$(".section1 .fade").addClass("solid");
			}else if(scrollTop<=section2H){
				$(".section2 .fade").addClass("solid");
			}
		}
	})();


	//home-page开启动画 
	// touch.on('.home-page', 'touchstart', function(ev){
	// 	ev.preventDefault();
	// });

	touch.on('.bgCover', 'swipedown', function(ev){
		$(".bgCover").hide();
		execJs();
		
	});




	$(".record").click(function(){
		$(".lIcon img:first-child").hide();
		$(".lIcon img:last-child").show();
		$(".rIcon em").hide();
	});

	

}


