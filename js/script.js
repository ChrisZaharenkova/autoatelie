$(function(){
    $("#container1").twentytwenty({
  
    no_overlay: true,
    move_slider_on_hover: true,
    });
    
  });
  const anchors = document.querySelectorAll('a.scroll-to')

  $("a[href*=#]").on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
    return false;
    });