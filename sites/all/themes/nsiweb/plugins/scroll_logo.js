(function ($) {
  function check_scroll() {
    if($(window).scrollTop() > 0)
    {
      $('a.logo.navbar-btn').addClass('scrolled-logo');
      $('header#navbar').addClass('scrolled-navbar');
    }
    else
    {
      if($(window).scrollTop() == 0)
      {
        $('a.logo.navbar-btn').removeClass('scrolled-logo');
        $('header#navbar').removeClass('scrolled-navbar');
      }
    }
  }
  Drupal.behaviors.ScrollLogo = {
    attach: function (context, settings) {
      check_scroll();
      $( window ).scroll(function() {
        check_scroll();
      });
      // $('button.navbar-toggle').click(function(){
      //   if($('.navbar-collapse').hasClass('in')) {
      //     $('header#navbar').removeClass('open-menu');
      //   }
      //   else {
      //     if($(window).scrollTop() == 0) {
      //       $('header#navbar').addClass('open-menu');
      //     }
      //   }
      // });
    }
  };
}(jQuery));