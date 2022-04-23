
$( document ).ready(function() {

  // homepage slide
  $('.slideshow_images').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: '<div class="top-custom-arrow slick-custom-arrow-right"><i class="fas fa-chevron-right"></i>',
      prevArrow: '<div class="top-custom-arrow slick-custom-arrow-left"><i class="fas fa-chevron-left"></i></div>',
  });


  // homepage team member slide
  $('.tabcontent_team_items').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: '<div class="top-custom-arrow slick-custom-arrow-right"><i class="fas fa-chevron-right"></i>',
      prevArrow: '<div class="top-custom-arrow slick-custom-arrow-left"><i class="fas fa-chevron-left"></i></div>',
      responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 1,
        }
      },
       {
        breakpoint: 992,
        settings: {
        vertical: false,
        slidesToShow: 2,
        }
      },
      {
        breakpoint: 1201,
        settings: {
        vertical: false,
        slidesToShow: 3,
        }
      },
      {
        breakpoint: 1400,
        settings: {
        vertical: false,
        slidesToShow: 4,
        }
      },
      ]

  });

 // portfolio page about section slide
  $('.about_portfolio_items').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: '<div class="top-custom-arrow slick-custom-arrow-right"><i class="fas fa-chevron-right"></i>',
      prevArrow: '<div class="top-custom-arrow slick-custom-arrow-left"><i class="fas fa-chevron-left"></i></div>',
  });

});

// Mobile trigger menu
(function($){
  "use strict";

  jQuery(document).ready(function(){
    $('.off_can_trigger').on('click',function(){
      $('.head_navbar').addClass('active');
      return false;
    });
  });

  jQuery(document).ready(function(){
    $('.off_canvas_close').on('click',function(){
      $('.head_navbar').removeClass('active');
    });
  });

}(jQuery));


// Load more portfolio image for portfolio page
$(document).ready(function(){
    $(".image_gallerys .col-md-3").slice(0, 10).show();
    $("#loadmore").on("click", function(e){
      e.preventDefault();
      $(".image_gallerys .col-md-3:hidden").slice(0, 4).slideDown();
      if($(".image_gallerys .col-md-3:hidden").length == 0) {
        $("#loadmore").text("No More Images").addClass("noContent");
      }
    });
})

//  Sticky header
$(window).scroll(function(){
      if ($(this).scrollTop() > 180) {
          $('.header_area').addClass('fixed');
          $('.header_area.if_homes').addClass('fixedhead');
      } else {
          $('.header_area').removeClass('fixed');
          $('.header_area.if_homes').removeClass('fixedhead');
      }
});


// home page team member
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove('opentab');
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activatetab", "");
  }
  document.getElementById(cityName).classList.add('opentab');
  evt.currentTarget.className += " activatetab";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// Fancybox
{
  $('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});
}


// Scroll management js
(function($){
  "use strict";

  jQuery(document).ready(function(){
    
    $("#exclusive_nailbar_top_sec").listenedByScroll("animated slideInLeft");
    $("#exclusive_nailbar_bottom_sec").listenedByScroll("animated slideInRight");
    $("#professional_team_member").listenedByScroll("animated flipInX");

  });

}(jQuery));

