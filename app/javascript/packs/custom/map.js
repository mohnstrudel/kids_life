$(document).on('turbolinks:load', function(){
    // console.log("Contacts geladen");
  if($("body").hasClass('contact')){
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("yandex_map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.7464824, 37.5358201],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });

        var myGeoObject = new ymaps.GeoObject({
          geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [55.7464824, 37.5358201] // координаты точки
            }
        });
        myMap.geoObjects.add(myGeoObject);
    }
  }
});