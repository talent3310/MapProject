 $.ajax({ //create an ajax request to api.php
     type: "GET",
     url: "api.php",
     dataType: "html",
     success: function(response) {
         $("#content").html(response);
         //alert(response);
     }

 });

 var map;
 var myCenter = { lat: -33.92, lng: 151.25 };

 function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
         center: myCenter,
         zoom: 8
     });


     var locations = [
         ['Bondi Beach', -33.890542, 151.274856, 4],
         ['Coogee Beach', -33.923036, 151.259052, 5],
         ['Cronulla Beach', -34.028249, 151.157507, 3],
         ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
         ['Maroubra Beach', -33.950198, 151.259302, 1]
     ];

     var infowindow = new google.maps.InfoWindow();

     var marker, i;

     for (i = 0; i < locations.length; i++) {
         marker = new google.maps.Marker({
             position: new google.maps.LatLng(locations[i][1], locations[i][2]),
             map: map
         });

         google.maps.event.addListener(marker, 'click', (function(marker, i) {
             return function() {
                 infowindow.setContent(locations[i][0]);
                 infowindow.open(map, marker);
             }
         })(marker, i));
     }
 }
