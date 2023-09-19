ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.758468, 37.601088],
      zoom: 13,
      controls: [] /* Убираем элементы управления*/
    },
    {
      suppressMapOpenBlock: true, /* Убираем элементы управления*/
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.758468, 37.601088],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/7contact/point.svg",
      iconImageSize: [20, 20],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}
