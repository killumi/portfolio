$(document).ready(function() {


		var wow = new WOW(
	  {
	    boxClass:     'wow',      
	    animateClass: 'animated', 
	    offset:       0,          
	    mobile:       true,       
	    live:         true,      
	    callback:     function(box) {
	      
	    },
	    scrollContainer: null 
	  }
	);
	wow.init();


	try {
		$.browserSelector('.arrow-bottom');
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
	$(".arrow-bottom").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+900 }, "slow");
		return false;
	});



