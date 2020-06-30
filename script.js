  //Function to initalize the map
  function initMap() {
      //Options for the maps(zoom-size, center, latitude, lang)
      var options = {
              zoom: 8,
              center: {
                  lat: 55.676098,
                  lng: 12.568337
              }
          }
          //Crating new Instance of maps
      var map = new google.maps.Map(document.getElementById('map'), options);

      //Crating a marker on the map
      var marker = new google.maps.Marker({
          position: { lat: 55.620750, lng: 12.650462 },
          map: map
      });

      //Info window
      var infoWindow = new google.maps.infoWindow({
          content: '<h1>Copenhagen Airport</h1>'
      });

      marker.addListener('click', function() {
          infoWindow.open(map, marker);
      })
  }