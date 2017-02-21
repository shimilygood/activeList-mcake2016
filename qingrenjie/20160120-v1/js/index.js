$(function(){
	var height=$(document).height();
	alert(height)
	$("html,body").animate({"scrollTop": height}, 0); 
});


window.onload=function(){
	var width=$(document).width();

	function execJs(){
		$(".box").addClass("scale");
		$(".rose").addClass("flower");
		
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


