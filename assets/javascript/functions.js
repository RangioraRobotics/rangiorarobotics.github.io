
$(document).ready(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 10) {
    $(".navibar").css("background-color", "rgb(65, 121, 244)");
  }else{
    $(".navibar").css("background-color", "rgba(65, 121, 244,0)");
  }
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $(".navibar").css("background-color", "rgb(65, 121, 244)");
    }else{
      $(".navibar").css("background-color", "rgba(65, 121, 244,0)");
    }
  });



  function showDraw() {
    $(".nav-draw").css("width", "0px");
    $(".nav-draw").show();
    $( ".nav-draw" ).animate({
      width: "300px",
    }, 300, function() {
    });
    $('.nav-drawbg').fadeIn();
    $('body').css("overflow-y","hidden");
  }
  function hideDraw() {
    $( ".nav-draw" ).animate({
      width: "0px",
    }, 300, function() {
      $(".nav-draw").hide();
    });

    $('.nav-drawbg').fadeOut();
    $('body').css("overflow-y","");
  }

  $('#navbar-more').click(function() {
    showDraw();
  });
  $('.nav-drawbg').click(function() {
    hideDraw();
  });
  $('.closeDraw').click(function() {
    hideDraw();
  });

})











// Image Gallery
function showImages() {
  $('#img-videos').addClass('hide');
  $('#img-images').removeClass('hide');
}
function showVideos() {
  $('#img-images').addClass('hide');
  $('#img-videos').removeClass('hide');
}
