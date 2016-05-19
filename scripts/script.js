$(function(){
	
	var toggled = false;
	
	var elementWidth = $(".square").width();
	var widthBlock = $(window).width()-elementWidth;
	
	//Check the window height and determine the width of div.

	$(".info").click(function(e){
		var parent = $(this).parent();
		var element = $(parent).parent();
		var children = $("#wrapper").children();
		var subChildren = $(element).children();
		var text = subChildren[1];
		var position = $(element).offset();
		var offset = position.left;
		console.log(element);
		/* If the window width is greater than 750 then target the width of an element and move it to the left
		for better readibility of the text and aesthetic factor*/
		
		if ($(window).width()>750){
			
			if ($(element).attr("status") == "off"){
				$(element).animate({
					right: offset
				}, 1500, function(target) {
					$(text).css("display","block");
					$(text).animate({width: "+="+widthBlock}, 1500, function(){
						$(element).attr("status","on");
					});
				});
			}
			else{
				var offset = position.left;
				$(text).animate({width: "-="+widthBlock}, 1500, function(){
					$(text).css("display","none");
					$(element).animate({
						right: -offset
					}, 1500, function(target) {
						$(text).animate({width: "+="+widthBlock}, 1500, function(){
							$(element).attr("status","off");
						});
					});
				});
			}
			
		}
		
		/* If the window width is less than the value specified, target the height of a text element */
		else{
			//If button is off, increase it's height
			if($(element).attr("status") == "off"){
				$(element).animate({marginBottom: 250},1000,function(){
					$(text).css("display","block");
					
					$(text).animate({height: 245},1200,function(){
						$(element).attr("status","on");
						console.log("Finished");
					});
				});
			}
			//If it is already on, decrease it's height.
			else{
				$(element).animate({marginBottom: 0},1500,function(){
					console.log("Margin set");
				});
				$(text).animate({height: 0},1500,function(){
					$(text).css("display","none");
					console.log("Finished");
                                        $(element).attr("status","off");
				});
			}
		}
	});	
});