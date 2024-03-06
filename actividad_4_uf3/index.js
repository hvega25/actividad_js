function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {lat: 41.390205, lng: 2.154007},
    });
    const image =
        "https://i.pinimg.com/736x/88/ef/db/88efdb1df1d293cba6542d69e2055690.jpg";
    const beachMarker = new google.maps.Marker({
        position: {lat: 41.390205, lng: 2.154007},
        map,
        icon: {
            url: image,
            scaledSize: new google.maps.Size(100, 100) // Establecer el tamaño del icono a 10x10
        }
    });


    let geocoder = new google.maps.Geocoder();
    let address = "R. Santa Eulália, 86 - Santana, São Paulo - SP, 02031-020, Brasil";
    geocoder.geocode({'address': address}, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            latitude = results[0].geometry.location.lat();
            longitude = results[0].geometry.location.lng();

            console.log(`Latitude : ${latitude}, Longitude : ${longitude}  `);
        }
    });

}

window.initMap = initMap;