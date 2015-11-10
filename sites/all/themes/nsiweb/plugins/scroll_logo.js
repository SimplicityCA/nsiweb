(function ($) {
  Drupal.behaviors.ScrollLogo = {
    attach: function (context, settings) {
      $( window ).scroll(function() {
        if($( window ).scrollTop() > 0)
        {
          $('a.logo.navbar-btn').addClass('scrolled-logo');
        }
        else
        {
          if($( window ).scrollTop() == 0)
          {
            $('a.logo.navbar-btn').removeClass('scrolled-logo');
          }
        }
      });
    }
  };
}(jQuery));