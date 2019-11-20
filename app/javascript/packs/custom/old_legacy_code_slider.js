$(document).on('turbolinks:load', function(){
  if($("body").hasClass('home')){
    setInterval(slide, 4000);

    function slide() {
      var left = $('#sliderList').css('left');
      left = left.substring(0, left.length - 2);
      if (left <= -1800) {
        $('#sliderList').css('left', '-1400px');
        var slide = $('#sliderList li:first');
        $('#sliderList').children('li:first').remove();
        $('#sliderList').append(slide);
        $('#sliderList').animate({ left: "-=1400px" }, "slow", "swing");
      }
      else {
        $('#sliderList').animate({ left: "-=1400" }, "slow", "swing");
      }
    }
  }
});
