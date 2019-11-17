$(document).on('turbolinks:load', function(){
  console.log("new_slider.js is loaded");
  var slider = document.querySelector('.glide');

  if (slider) {
    console.log("we are inside the if:");
    var glide = new Glide(slider).mount();
    console.log("glide is loaded:");
    console.log(glide);
    glide.mount();
  }

});