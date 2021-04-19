document.addEventListener("DOMContentLoaded", function () {
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [57.147165, 65.543985],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17,
            controls: [],
        });
        myMap.behaviors.disable('drag');
        myMap.behaviors.disable('scrollZoom');

        var myPlaceMark = new ymaps.Placemark(myMap.getCenter(),{
           hitContent: 'Улица Некрасова 10',
            iconCaption: 'Улица Некрасова 10',
        },
            {
                preset: 'islands#icon',
            });
        myMap.geoObjects.add(myPlaceMark);
    }
});
