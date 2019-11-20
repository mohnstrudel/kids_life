import Glide, { Controls, Autoplay, Swipe } from '@glidejs/glide/dist/glide.modular.esm';

$(document).on('turbolinks:load', function(){
  var slider = document.querySelector('.glide');

  if (slider) {
    var glide = new Glide(slider, {
      autoplay: 6000
    });
    glide.mount({ Controls, Autoplay, Swipe });
  }

});