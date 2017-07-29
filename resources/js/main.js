$(document).ready(function(){

  $('.carousel').slick({
   autoplay: true,
   speed: 4000,
   arrows: false,
   draggable: false,
   focus: false,
   hover: false
  });

  var userScrollDistance = 0;
  $(window).scroll(function(){

    var scrollTop = $(this).scrollTop();
    console.log(scrollTop)
    if (scrollTop - userScrollDistance >= 50) {
      var navbarHeight = $('.navbar').css('height');
      $('.navbar').animate({top:`${-navbarHeight}`}, 150);
      userScrollDistance = scrollTop;
    }
    else if (userScrollDistance - scrollTop >= 50) {
      $('.navbar').animate({top: '0'}, 150);
      userScrollDistance = scrollTop;
    }
  })
});
