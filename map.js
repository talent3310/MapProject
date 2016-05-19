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
