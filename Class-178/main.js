let latitude=22.7868542, longitude=88.3643296;

mapboxgl.accessToken = 'pk.eyJ1IjoiemEtLWhhbmRvIiwiYSI6ImNsamthOGZiazBscjMzZG51ajBqYWptcWgifQ.wEscDY4LNXuTCMHB6L1dww';

var map = new mapboxgl.Map({
    container:'map',
    style:"mapbox://styles/mapbox/streets-v11",
    center:[latitude,longitude],
    zoom:15
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
)

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
    )