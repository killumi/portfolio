$(document).ready(function() {


		$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top-mnu").slideToggle();
		return false;
	});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

	jQuery(document).ready(function($) {
	  $('.view-1').viewportChecker({
	      classToAdd: 'circle-1',
	      classToRemove: 'invisible',
	      offset: 10,
	      callbackFunction: function(elem, action){

	      	$('.circle-1').circleProgress({
		  value: 0.9,
		   fill: {
		      color: "#30bae7"
		    },
		    animationStartValue: 0.1,
		}).on('circle-animation-progress', function(event, progress) {
		  $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
		});
	      },
	      scrollHorizontal: false
	  });
	});



	jQuery(document).ready(function($) {
	  $('.view-2').viewportChecker({
	      classToAdd: 'circle-2',
	      classToRemove: 'invisible',
	      offset: 10,
	      callbackFunction: function(elem, action){

	      	$('.circle-2').circleProgress({
		  value: 0.75,
		   fill: {
		      color: "#d74680"
		    },
		    animationStartValue: 0.1,
		}).on('circle-animation-progress', function(event, progress) {
		  $(this).find('strong').html(parseInt(75 * progress) + '<i>%</i>');
		});
	      },
	      scrollHorizontal: false
	  });
	});

	jQuery(document).ready(function($) {
	  $('.view-3').viewportChecker({
	      classToAdd: 'circle-3',
	      classToRemove: 'invisible',
	      offset: 10,
	      callbackFunction: function(elem, action){

	      	$('.circle-3').circleProgress({
		  value: 0.70,
		   fill: {
		      color: "#15c7a8"
		    },
		    animationStartValue: 0.1,
		}).on('circle-animation-progress', function(event, progress) {
		  $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
		});
	      },
	      scrollHorizontal: false
	  });
	});


	jQuery(document).ready(function($) {
	  $('.view-4').viewportChecker({
	      classToAdd: 'circle-4',
	      classToRemove: 'invisible',
	      offset: 10,
	      callbackFunction: function(elem, action){

	      	$('.circle-4').circleProgress({
		  value: 0.85,
		   fill: {
		      color: "#eb7d4b"
		    },
		    animationStartValue: 0.1,
		}).on('circle-animation-progress', function(event, progress) {
		  $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
		});
	      },
	      scrollHorizontal: false
	  });
	});
// 	//Цели для Яндекс.Метрики и Google Analytics
// 	$(".count_element").on("click", (function() {
// 		ga("send", "event", "goal", "goal");
// 		yaCounterXXXXXXXX.reachGoal("goal");
// 		return true;
// 	}));

// 	//SVG Fallback
// 	if(!Modernizr.svg) {
// 		$("img[src*='svg']").attr("src", function() {
// 			return $(this).attr("src").replace(".svg", ".png");
// 		});
// 	};

// 	//Аякс отправка форм
// 	//Документация: http://api.jquery.com/jquery.ajax/
// 	$("#form").submit(function() {
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			alert("Спасибо за заявку!");
// 			setTimeout(function() {
				
// 				$("#form").trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

	//Chrome Smooth Scroll
	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {

	// };

// 	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
