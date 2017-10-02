(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 82)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#secondNav',
    offset: 82
  });

})(jQuery); // End of use strict

//var myCanvas = document.getElementById("myCanvas");
//var drawingContext = myCanvas.getContext("2d");
//
//var color1 = "#FFFFFF",color2="#EDF1F4",color3="#5DBFD4";
//var numberOfStripes = 3;
//for (var i=0;i < numberOfStripes+1;i++){
//  var thickness = 207 / numberOfStripes;
//  drawingContext.beginPath();
//  if (i == 0) {
//    drawingContext.strokeStyle = color1;
//  } else if (i == 1) {
//    drawingContext.strokeStyle = color2;
//  } else {
//    drawingContext.strokeStyle = color3;
//  }
//  drawingContext.lineWidth =thickness;
//
//  drawingContext.moveTo(i*thickness + thickness/2,0);
//  drawingContext.lineTo(i*thickness+thickness/2,300);
//  drawingContext.stroke();
//}

// focus links
// document.getElementsByClassName('active').active()


$(function(){
	var update = function () {
	  washingtonTime = moment.tz("US/Eastern");
	  londonTime = moment.tz("Europe/London");
	  delhiTime = moment.tz("Asia/Colombo");

	  $('.washington').html(washingtonTime.format('hh:mm:ss a'));
	  $('.london').html(londonTime.format('hh:mm:ss a'));
	  $('.delhi').html(delhiTime.format('hh:mm:ss a'));
	};
	update();
	setInterval(update, 1000);
});

function validateForm() {
  var email = document.forms.namedItem("contact-form").elements["_replyto"].value;
  if (email == "") {
      alert("Email must be filled out correctly");
      return false;
  }
  alert("Thank you for signing up for our newsletter. You will now receive occasional updates about ongoing Space-Eyes innovations.");
  return true;
}
