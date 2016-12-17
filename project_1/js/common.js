$(document).ready(function() {





	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".nav").slideToggle();
		return false;
	});

$(".toggle-mnu-2").click(function() {
		$(this).toggleClass("on");
		$(".nav-2").slideToggle();
		return false;
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	// $("").owlCarousel({
	// 	items : 1,
	// 	nav : true,
	// 	navText : "",
	// 	loop : true,
	// 	autoplay : true,
	// 	autoplayHoverPause : true,
	// 	fluidSpeed : 600,
	// 	autoplaySpeed : 600,
	// 	navSpeed : 600,
	// 	dotsSpeed : 600,
	// 	dragEndSpeed : 600
	// });



	//Chrome Smooth Scroll
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
		$("html, body").animate({ scrollTop: $(".main-head").height()+400 }, "slow");
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
	  value: 0.8,
	   fill: {
	      color: "#19bd9a"
	    },
	    animationStartValue: 0.1,
	}).on('circle-animation-progress', function(event, progress) {
	  $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
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
	      color: "#19bd9a"
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
	  value: 0.60,
	   fill: {
	      color: "#19bd9a"
	    },
	    animationStartValue: 0.1,
	}).on('circle-animation-progress', function(event, progress) {
	  $(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
	});
      },
      scrollHorizontal: false
  });
});

	



















var bar = new ProgressBar.Line(".progress-1", {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#000',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#9599a0',
      position: 'absolute',
      right: '0',
      top: '-10px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 80) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line(".progress-2", {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#000',
  trailWidth: 1,
  svgStyle: {width: '65%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#9599a0',
      position: 'absolute',
      right: '0',
      top: '-10px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 65) + ' %');
  }
});
bar.animate(1.0);


var bar = new ProgressBar.Line(".progress-3", {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#000',
  trailWidth: 1,
  svgStyle: {width: '75%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#9599a0',
      position: 'absolute',
      right: '0',
      top: '-10px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 75) + ' %');
  }
});
bar.animate(1.0);

var bar = new ProgressBar.Line(".progress-4", {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#000',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#9599a0',
      position: 'absolute',
      right: '0',
      top: '-10px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 80) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0



var bar = new ProgressBar.Line(".progress-5", {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#000',
  trailWidth: 1,
  svgStyle: {width: '65%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#9599a0',
      position: 'absolute',
      right: '0',
      top: '-10px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 65) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0





var bar = new ProgressBar.Line(".progress-6", {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#000',
  trailWidth: 1,
  svgStyle: {width: '75%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#9599a0',
      position: 'absolute',
      right: '0',
      top: '-10px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 75) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0


var bar = new ProgressBar.Line(".progress-7", {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#000',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#9599a0',
      position: 'absolute',
      right: '0',
      top: '-10px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 80) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0


var bar = new ProgressBar.Line(".progress-8", {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#000',
  trailWidth: 1,
  svgStyle: {width: '65%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#9599a0',
      position: 'absolute',
      right: '0',
      top: '-10px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 65) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0



var bar = new ProgressBar.Line(".progress-9", {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#000',
  trailWidth: 1,
  svgStyle: {width: '75%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#9599a0',
      position: 'absolute',
      right: '0',
      top: '-10px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 75) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0

$(".slider-sec-6").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});



$(".slider-sec-7").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});




	// $('.circle-2').circleProgress({
	//   value: 0.8,
	//    fill: {
	//       color: "#19bd9a"
	//     },
	//     animationStartValue: 0.1,
	// }).on('circle-animation-progress', function(event, progress) {
	//   $(this).find('strong').html(parseInt(75 * progress) + '<i>%</i>');
	// });



	// $('.circle-3').circleProgress({
	//   value: 0.8,
	//    fill: {
	//       color: "#19bd9a"
	//     },
	//     animationStartValue: 0.1,
	// }).on('circle-animation-progress', function(event, progress) {
	//   $(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
	// });

   
  // $('#circle-1').circleProgress({
  //   value: 0.8,

  //   size: 120,
  //   reverse: false,
  //   fill: {
  //     color: "#19bd9a"
  //   },
  
  //   animationStartValue: 0.1

  //     });

   