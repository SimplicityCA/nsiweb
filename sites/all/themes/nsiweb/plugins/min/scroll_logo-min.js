!function($){Drupal.behaviors.ScrollLogo={attach:function(o,l){$(window).scroll(function(){console.log("hay scroll"+$(window).scrollTop()),$(window).scrollTop()>0?$("a.logo.navbar-btn").addClass("scrolled-logo"):0==$(window).scrollTop()&&$("a.logo.navbar-btn").removeClass("scrolled-logo")})}}}(jQuery);