$(function(){
	var toggled = false;
	var windowWidth = window.innerWidth;
	
	var position = $(".sample.steam").offset();
	var offset = position.left;
	
	var position2 = $(".sample.steam").offset();
	var offset2 = position2.left;
	
	$(".info.steam").click(function(){
			if ($(".sample.steam").attr("status") == "off"){
				$(".sample.portfolio").css("visibility","hidden");
				$(".sample.steam").attr("status","on")
				$( ".sample.steam" ).animate({
				right: "+="+offset+"px"
				}, 1500, function() {
					
					if (windowWidth < 700){
						var width = 405;
					}
					else{
						var width = (windowWidth/2);
					}
					$(".text.steam").css("display","block");
					$(".text.steam").animate({
						width: width
					}, 1500, function(){
						
					});	
				});
			}
			else{
			
			$(".sample.steam").attr("status","off");
			$( ".sample.steam" ).animate({
				right: "-="+offset+"px"
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
				right: "+="+offset2+"px"
				}, 1500, function() {
					
					
					
				$(".text.portfolio").css("display","block");
					$(".text.portfolio").animate({
						width: (window.innerWidth/2)
					}, 1500, function(){
					});	
				});
			}
			else{
				
			$(".sample.portfolio").attr("status","off");
			$( ".sample.portfolio" ).animate({
			right: "-="+offset2+"px"
			}, 1500, function() {
			$(".text.portfolio").css("display","none");
			$(".sample.steam").css("visibility","visible");
			});
			}
	});
	
});