(function ($) {
  Drupal.behaviors.ScrollLogo = {
    attach: function (context, settings) {
      $( window ).scroll(function() {
        // $( "span" ).css( "display", "inline" ).fadeOut( "slow" );
        console.log('hay scroll'+$( window ).scrollTop());
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