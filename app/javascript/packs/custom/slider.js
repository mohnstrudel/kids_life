$(document).ready(function(){
  // console.log('slider is loaded');
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  $('.slideshow-container a').on('click', function(e){
    var next_move = $(this).data("nextmove");
    showSlides(slideIndex += next_move);
  });
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // Thumbnail image controls

  $('.dot').on('click', function(e){
    var slide_count = $(this).data("currentslide");
    showSlides(slideIndex = slide_count);
  });

  // function currentSlide(n) {
  //   console.log("current Slide function clicked");
  //   showSlides(slideIndex = n);
  // }

  function showSlides(n) {
    // console.log("show Slides is executed");
    var i;
    var slides = $(".mySlides");
    var dots = $(".dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slider_active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " slider_active";
  }
});
