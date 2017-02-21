$(function(){
	window.scrollTo(0,0);
	
	$(document).login();

	$(".loginBtn").click(function(){
		/*$(document).tc({
			cText:'你的账号不符合规则',  //更改文案
			i:0
		});*/
	});
	 //$(document).tc();//打开弹窗
	 $(".infos").tab(); //显示收货人信息
	/*选择配送*/
	$(".ui-select select").change(function(){
		$(this).prev("i").text($(this).val());
	});

	$(".city em").click(function(){
		var cityName = $(this).data("value"),
			indexi = $(this).index(),
			last = 1;
		
		if(indexi==0 && last){
			$(document).tc({
				cText:cityName+'的蛋糕已被抢完了',  //更改文案
				i:1
			});
		}else if(indexi==1 && last){
			$(document).tc({
				cText:cityName+'的蛋糕已被抢完了',  //更改文案
				i:1
			});
		}else if(!last){
			$(document).tc({
				cText:'所有的蛋糕已被抢完了',  //更改文案
				i:0  //去掉关闭按钮
			});
		}
		
	});


	$(".submit").click(function(){
		//提交信息时验证手机号
		var nameVal=$(this).siblings(".line").find(".name").val()-0,
			telVal=$(this).siblings(".line").find(".tel").val(),
		    adsVal=$(this).siblings(".line").find(".address").val()-0;
		if(nameVal==0 || telVal==0 || adsVal==0){
			$(document).tc({
				cText:'你的信息填写不完整',  //更改文案
				cBtnText:"确定",
				i:0
			});
			
		}
	});

	
	

});