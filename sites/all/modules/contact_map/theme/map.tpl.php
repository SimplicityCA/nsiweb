<head>
  <title>Contact Map</title>
</head>
<body class="contact_map">
  <script type="text/x-custom-template" id="mapmain">
  </script>
  <div id="map" style="width: 100%; height: 100%;"></div>
  <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script> 
    google.maps.event.addDomListener(window, 'load', init);
    function init() {
      var mapCenter = new google.maps.LatLng(-0.115553, -78.472696);
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: mapCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false
      });
      var styles = [
        {
          "featureType": "transit",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "poi",
          "stylers": [
            { "visibility": "off" }
          ]
        }
      ];
      map.setOptions({styles: styles});

      var bounds = new google.maps.LatLngBounds();
      var loc = new google.maps.LatLng(-0.115553, -78.472696);
      bounds.extend(loc);
      var markerInfo = {
        position: loc,
        map: map,
        // title: item.market,
        // id: item.cartodb_id,
        // icon: items.marker,
        // info: _marker_info_template(item),
      };
      var marker = new google.maps.Marker(markerInfo);
      // map.fitBounds(bounds);
    }
  </script>
</body>
