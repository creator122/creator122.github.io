$(function(){
	
	//Determine the offset of elements and whether they are toggled or not
	
	var steam = ".sample.steam";
	var portfolio = ".sample.portfolio";
	var text = ".text";
	var elementWidth = $(".square").width();
	var toggled = false;
	var noice = {}
	
	var width = $(window).width()-elementWidth;
	
	var position = $(".sample.steam").offset();
	var offset = position.left;
	
	//Check the window height and determine the width of div.

	$(".info.steam").click(function(e){
		if ($(steam).attr("status") == "off"){
			$(portfolio).css("visibility","hidden");
			$(steam).attr("status","on")
			$( steam ).animate({
			right: "+="+offset+"px"
			}, 1500, function(target) {
				$(".text.steam").css("display","block");
				
				if ($(window).width()>750){
					var textBox = {width: 500};
				}
				else{
					var textBox = {height: 500};
				}
				
				$(".text.steam").animate(textBox, 1500, function(){
				$(steam).attr("status","on");
			});
		});
	}
		
		else{
			
			$(steam).attr("status","off")
			$( ".text.steam" ).animate({
			width: 0
			}, 1500, function() {
				$(".text.steam").css("display","none");
				$(steam).animate({
					right: "-="+offset+"px"
				}, 1500, function(){
				$(steam).attr("status","off");
				$(portfolio).css("visibility","visible");
			});
		});
		
	}
});	
	
	$(".info.portfolio").click(function(){
		if ($(portfolio).attr("status") == "off"){
			$(steam).css("visibility","hidden");
			$( portfolio ).animate({
			right: "+="+offset+"px"
			}, 1500, function() {
				$(".text.portfolio").css("display","block");
				$(".text.portfolio").animate({
					target: width
				}, 1500, function(){
				$(portfolio).attr("status","on");
			});
		});
	}
		
		else{
			
			$(portfolio).attr("status","off")
			$( ".text.portfolio" ).animate({
			width: 0
			}, 1500, function() {
				$(".text.portfolio").css("display","none");
				$(portfolio).animate({
					right: "-="+offset+"px"
				}, 1500, function(){
				$(steam).attr("status","off");
				$(steam).css("visibility","visible");
			});
		});
	}
	});	
	
});
