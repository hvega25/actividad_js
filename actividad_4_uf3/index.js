function initMap() {


    fetch('data.json')
        .then(response => response.json())
        .then(mapStyle => {


                const map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 8,
                    center: {lat: 41.390205, lng: 2.154007},
                    styles: mapStyle
                });

                const image =
                    "piggy-bank.png";
                const beachMarker = new google.maps.Marker({
                    position: {lat: 41.390205, lng: 2.154007},
                    map,
                    icon: {
                        url: image,
                        scaledSize: new google.maps.Size(100, 100) // Establecer el tamaño del icono a 10x10
                    }

                });

                let infowindow = new google.maps.InfoWindow({
                        content: 'Clickeaste un cerdito'
                    })
                ;
                beachMarker.addListener('click', function () {
                    infowindow.open(map, beachMarker);
                });

            }
        ).catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

}

document.getElementById('findLoc').addEventListener('click', function () {
    console.log('funciona');


    fetch('data.json')
        .then(response => response.json())
        .then(mapStyle => {
            let geocoder = new google.maps.Geocoder();
            let address = document.getElementById("adreca");
            console.log(address.value)

            let lat = document.getElementById("latitude");
            let long = document.getElementById("longitude");
            geocoder.geocode({'address': address.value.toString()}, function (results, status) {

                if (status == google.maps.GeocoderStatus.OK) {
                    latitude = results[0].geometry.location.lat();
                    longitude = results[0].geometry.location.lng();
                    lat.value = latitude;
                    long.value = longitude;
                    console.log(`Prueba del geocoder Latitude : ${latitude}, Longitude : ${longitude}  `);

                    const map = new google.maps.Map(document.getElementById("map"), {
                        zoom: 16,
                        center: {lat: latitude, lng: longitude},
                        styles: mapStyle
                    });


                    const image =
                        "piggy-bank.png";
                    const beachMarker = new google.maps.Marker({
                        position: {lat: latitude, lng: longitude},
                        map,
                        icon: {
                            url: image,
                            scaledSize: new google.maps.Size(100, 100) // Establecer el tamaño del icono a 10x10
                        }

                    });

                    let infowindow = new google.maps.InfoWindow({
                            content: 'Clickeaste un cerdito'
                        })
                    ;
                    beachMarker.addListener('click', function () {
                        infowindow.open(map, beachMarker);
                    });


                } else {
                    alert("No se encuentra");
                }
            });
        }).catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

})


document.getElementById('geo').addEventListener('click', function () {

    fetch('data.json')
        .then(response => response.json())
        .then(mapStyle => {
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 16,
                center: {lat: latitude, lng: longitude},
                styles: mapStyle
            });


            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    let pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    map.setCenter(pos);
                    map.setZoom(9);
                    let marker = new google.maps.Marker({
                        position: pos,
                        map: map
                    });
                });



            }
        }).catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

})
window.initMap = initMap;