/************
 *active page
 *********/
jQuery(function($) {
    var path = window.location.href; 
    $('.navbar-nav .nav-link').each(function() {
     if (this.href === path) {
      $(this).addClass('active');
     }
    });
   });
/***********
 * hamburger menu
 ***********/
$('.navbar-toggler').html("<i class='fas fa-bars'></i>");