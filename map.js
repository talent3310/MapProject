 $(document).ready(function() {
   

         $.ajax({ //create an ajax request to api.php
             type: "GET",
             url: "api.php",
             dataType: "html",
             success: function(response) {
                 $("#content").html(response);
                 //alert(response);
             }

         });
     
 });

var map;
	var myCenter={lat: 51.508742, lng: -0.120850};
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: myCenter,
            zoom: 8
        });

        
    var marker=new google.maps.Marker({
  position:myCenter,
  });
marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"Hello World!"
  });

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });
    }
