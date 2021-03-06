$(document).ready(function() {

// Add spin.js to lazy load container

$('.lazy-container').spin({ color: '#000'});

// Lazy loading. 
$("img.lazy").lazyload({ 
  // The image starts loading 200 px before it is in viewport
   threshold : 200,
   // Remove the line if you don`t need fade effect. 
   effect : "fadeIn", 
   // Change this for fade in speed
    effectspeed: 600,
   //  Hide spinner when loaded
   load : function(elements_left, settings) {
 $(".lazy-container").has(this).addClass('loaded');
 $(".loaded .spinner").remove();
// refresh bootstrap scrollspy, when image is loaded
 $('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});
      }
}); 

// Lightbox

$('.lightbox').magnificPopup({
  type:'image',
   disableOn: function() {
    // Detect here whether you want to show the popup
    // return true if you want
    if($(window).width() < 500) {
      return false;
    }
    return true; },
     preloader: true,
tLoading: 'Loading',

// Delay in milliseconds before popup is removed
	removalDelay: 300,
  mainClass: 'mfp-fade',
  callbacks: {
    open: function() {
      $('.navbar').fadeOut('slow');
    },
    close: function() {
     $('.navbar').fadeIn('slow');
    }
	
  }

});

// Lightbox video/maps

$(' .iframe').magnificPopup({
  type:'iframe',
  mainClass: 'mfp-fad',
     disableOn: function() {
    if($(window).width() < 500) {
      return false;
    }
    return true; },
     preloader: true,

 callbacks: {
    open: function() {
      $('.navbar').fadeOut('slow');
    },
    close: function() {
     $('.navbar').fadeIn('slow');
    }
 }
});

// .scroll class for link scrolling.

 $('.scroll[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash;
        $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
      });

});

// .scroll class for link scrolling.
 
$('.collapse').on('show', function(){
    $(this).parent().find(".icon-plus").removeClass("icon-plus").addClass("icon-minus");
    $(this).parent().find(".accordion-heading").addClass("active");
}).on('hide', function(){
    $(this).parent().find(".icon-minus").removeClass("icon-minus").addClass("icon-plus");
    $(this).parent().find(".accordion-heading").removeClass("active");
});

// Close menu when clicked. Mobile view

$('#menu a').click(function (e) {
        
        $(this).tab('show');
        if ($('.btn-nav').is(":visible"))
          $('.btn-nav').click();
      });

//  Remove logo from menu. when mobile view
var jRes = jRespond([
    {
        label: 'mobile',
        enter: 0,
        exit: 768
    }
]);

jRes.addFunc({
    breakpoint: 'mobile',
    enter: function() {
    $('h1').fadeOut('slow');          
    },
    exit: function() {
  $('h1').fadeIn('slow');
    }
});


	// Contact Us
	$('#contact-submit').click(function(){
		$.ajax({
			type: "GET",
			url: "https://sendgrid.com/api/mail.send.json?api_user=metable&api_key=Allen2009!&to=tom.allen@metable.co&toname=Tom+Allen&subject=Contact+Us&text=" + escape($('#contact-question').val()) + "&from=" + escape($('#contact-email').val()) + "&fromname=" + escape($('#contact-name').val())
		});
		$('.contact-form').html("<h3>Thanks! We'll get back to you shortly</h3>");
	});
	
	// Sign Up
	$('#sign-up-submit').click(function(){
		$.ajax({
			dataType: "json",
			type: "GET",
			url: "https://sendgrid.com/api/mail.send.json?api_user=metable&api_key=Allen2009!&to=tom.allen@metable.co&toname=Tom+Allen&subject=Beta+Sign+Up&text=" + escape($('#sign-up-email').val()) + "&from=" + escape($('#sign-up-email').val())
		});
		$('.sign-up-form').html("<h3>Thanks! We'll be in touch in the next few days!</h3>");
	});

});


/* Copyright 2013 Soundarapandian
 * Script for pricing table built on Twitter Bootstrap.
 */
$('.pricing-table .plan').mouseover(function() {
  var plan = $(this);
  plan.addClass('plan-mouseover');
}).mouseout(function() {
  var plan = $(this);
  plan.removeClass('plan-mouseover');
});



