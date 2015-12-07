$(document).ready(function(){


$("#email").on("click", function(){
  $('#modalContact').modal('show');
});

$("#twitter").on("click", function(){
  $('#modalTwitter').modal('show');
});

$('.gscale').on("mouseenter", function() {
  $(this).stop(true).addClass("grayscale");
});

$('.gscale').on("mouseleave", function() {
  $(this).stop(true).removeClass("grayscale");
});



});


