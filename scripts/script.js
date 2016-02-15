$(function(){
	
	//Determine the offset of elements and whether they are toggled or not
	
	var steam = ".sample.steam";
	var portfolio = ".sample.portfolio";
	
	var toggled = false;
	var windowWidth = window.innerWidth;
	
	var position = $(".sample.steam").offset();
	var offset = position.left;
	
	//Check the window height and determine the width of div.
	
	if (windowWidth < 700){
		var width = 405;
	}
	else{
		var width = (windowWidth/2);
	}
	
	$("button.steam").click(function(e){
		if ($(steam).attr("status") == "off"){
			$(portfolio).css("visibility","hidden");
			$(steam).attr("status","on")
			$( steam ).animate({
			right: "+="+offset+"px"
			}, 1500, function() {
				$(".text.steam").css("display","block");
				$(".text.steam").animate({
					width: width
				}, 1500, function(){
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
	
	$("button.portfolio").click(function(){
		if ($(portfolio).attr("status") == "off"){
			$(steam).css("visibility","hidden");
			$( portfolio ).animate({
			right: "+="+offset+"px"
			}, 1500, function() {
				$(".text.portfolio").css("display","block");
				$(".text.portfolio").animate({
					width: width
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
