$(function(){
	
	var toggled = false;
	
	var elementWidth = $(".square").width();
	var width = $(window).width()-elementWidth;
	
	//Check the window height and determine the width of div.

	$(".info").click(function(e){
		var parent = $(this).parent();
		var element = $(parent).parent();
		var children = $("#wrapper").children();
		var subChildren = $(element).children();
		var text = subChildren[1];
		var position = $(element).offset();
		var offset = position.left;
		
		for (child in children){
			console.log(child[0]);
		}
		
		if ($(element).attr("status") == "off"){
			$(element).attr("status","on")
			$(element).animate({
				right: "+="+offset+"px"
			}, 1500, function(target) {
				$(text).css("display","block");
				
				if ($(window).width()>750){
					var textBox = {width: 500};
					width = true;
					height = false;
					hide = false;
				}
				else{
					var textBox = {height: 200};
					height = true;
					width = false;
					hide = true;
				}
				
				$(text).animate(textBox, 1500, function(){
				$(element).attr("status","on");
			});
		});
	}
		
		else{
			
			var offset = position.left;
			
			if (height == true && width == false){
				$( text ).animate({height: 0}, 1500, function() {
					$(text).css("display","none");
					$(element).attr("status","off");
				});
			}
			else{
				$(element).attr("status","off")
					$( text ).animate({width: 0}, 1500, function() {
						$(text).css("display","none");
						$(element).animate({
							right: -offset
					}, 1500, function(){
						$(element).attr("status","off");
					});
				});
			}
		}
	});	
});