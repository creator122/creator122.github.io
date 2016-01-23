$(function(){
	var toggled = false;
	$("#info_steam").click(function(){
			if ($(".sample.steam").attr("status") == "off"){
				$(".sample.portfolio").css("visibility","hidden");
				$(".sample.steam").attr("status","on")
				$( ".sample.steam" ).animate({
				right: "+=230px"
				}, 1500, function() {
				$(".text.steam").css("display","block");
				});
			}
			else{
				
			$(".sample.steam").attr("status","off");
			$( ".sample.steam" ).animate({
			right: "-=230px"
			}, 1500, function() {
			$(".text.steam").css("display","none");
			$(".sample.portfolio").css("visibility","visible");
			});
			}
	});
	
	$(".info.portfolio").click(function(){
		if ($(".sample.portfolio").attr("status") == "off"){
				$(".sample.steam").css("visibility","hidden");
				$(".sample.portfolio").attr("status","on")
				$( ".sample.portfolio" ).animate({
				right: "+=760px"
				}, 1500, function() {
				$(".text.portfolio").css("display","block");
				});
			}
			else{
				
			$(".sample.portfolio").attr("status","off");
			$( ".sample.portfolio" ).animate({
			right: "-=760px"
			}, 1500, function() {
			$(".text.portfolio").css("display","none");
			$(".sample.steam").css("visibility","visible");
			});
			}
	});
	
});