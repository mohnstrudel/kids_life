$(document).ready(function(){
  var showSlidesFunc = function showSlides(n, increment) {
    increment_slide_index();
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
    setTimeout(showSlidesFunc, 4000);
  };

  function increment_slide_index(){
    if((slideIndex += 1) > 4) {
      slideIndex = 1;
    }
  }


  var slideIndex = 0;
  // showSlides(slideIndex);
  showSlidesFunc(1);

  // Next/previous controls
  // $('.slideshow-container a').on('click', function(e){
  //   var next_move = $(this).data("nextmove");
  //   showSlidesFunc(slideIndex += next_move, false);
  // });

  // Thumbnail image controls
  // $('.dot').on('click', function(e){
  //   var slide_count = $(this).data("currentslide");
  //   showSlidesFunc(slideIndex = slide_count, false);
  // });
});
