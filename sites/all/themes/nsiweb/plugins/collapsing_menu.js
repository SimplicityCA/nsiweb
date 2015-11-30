// (function ($, viewport){
//   function toggleClasses(breakpoint) {

//   }
//   Drupal.behaviors.first_right_ad_on_mobile = {
//     attach: function (context, settings) {
//       $(document).ready(function(){
//         $('.navbar-collapse.collapse').click(function(){
//           console.log('click al colapse');
//         });
//         // On viewport change
//         $(window).resize(viewport.changed(function() {
//           console.log(viewport.current());
//           toggleClasses(viewport.current());
//         }));
//       });
//     }
//   }
// })(jQuery, ResponsiveBootstrapToolkit);