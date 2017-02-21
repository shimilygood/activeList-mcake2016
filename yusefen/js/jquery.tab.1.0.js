/*tab切换*/
;(function($){
	$.fn.tab=function(options){
		var defaults = {
			cur   :"on",
			oDiv  :$(".infobox"),
			subDiv:".info"

		}
		var options = $.extend(defaults,options);
		this.each(function(){ 
			var _this = $(this);
			_this.find("em").click(function(){
				var index=$(this).index();
				$(this).addClass(options.cur).siblings().removeClass(options.cur);
				options.oDiv.find(options.subDiv).eq(index).show().siblings().hide();
			})
		});
		return this;  //方便链式操作
	}

	$.fn.login=function(options){
		var defaults = {
			eventType:'click',
			tanchuang:$(".tanchuang"),
			login    :$(".login"),
			cDiv     :'.bgCover,.login',
			loginBtn :$(".loginBtn")
		
		}
		var options = $.extend(defaults,options);
		this.each(function(){
			 var Height=options.tanchuang.height();
			options.login.css("marginTop",-Height/2); 
			$(options.cDiv).show();
			
			/*关闭*/
			options.loginBtn.on(options.eventType,function(){
				$(options.cDiv).hide();
			})
			
		});
		return this;  //方便链式操作
	}

	$.fn.tc=function(options){
		var defaults = {
			eventType:'click',
			tanchuang:$(".tanchuang"),
			cDiv     :'.bgCover,.tcbox',
			tcbox    :$(".tcbox"),
			cClose   :$(".close"),
			cText    :'你的账号不符合规则',
			gohome   :$(".gohome"),
			cBtnText :''||'去首页买其他蛋糕',
			i        :0||1   //0：没有关闭按钮   1：有关闭按钮

		}
		var options = $.extend(defaults,options);
		this.each(function(){
			var Height=options.tanchuang.height();
			options.tcbox.css({
				"marginTop":-Height/2
			}); 
			$(options.cDiv).show();
			options.tcbox.find("p").text(options.cText);
			if(options.cBtnText!=="去首页买其他蛋糕"){
				options.tcbox.find(".btn span").text(options.cBtnText);
				options.gohome.bind(options.eventType,function(){
					$(options.cDiv).hide();
					options.cBtnText="去首页买其他蛋糕";
					return false;
				});
			}else{
				options.tcbox.find(".btn span").text(options.cBtnText);
				options.gohome.unbind(options.eventType);

			}
			
			/*关闭*/
			options.cClose.on(options.eventType,function(){
				$(options.cDiv).hide();
			});
			//是否有关闭按钮
			if(!options.i){
				options.cClose.hide();
			}else{
				options.cClose.show();
			}
			
		});
		return this;  //方便链式操作
	}
})(jQuery);