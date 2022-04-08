let myMap;

const init = () => {
    myMap = new ymaps.Map("mapBlock", {
        center: [58.010374, 56.229398],
        zoom: 10,
        controls: []
    });

    const coords = [
        [57.987497, 56.198156],
        [57.983850, 56.261327],
        [58.013745, 56.246907],
    ]

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './images/marker.png',
        iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
    });

    coords.forEach(coord =>{
        myCollection.add(new ymaps.Placemark(coord))
    })

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}


ymaps.ready(init);