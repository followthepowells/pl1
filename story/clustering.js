function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom:7,
      center: { lat: 45.065, lng: -79.024 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  //Maple Farms and Sugar Shacks in Ontario
  const locations = [
    { lat: 45.247, lng: -76.311},
    { lat: 45.4848, lng: -75.4208},
    { lat: 45.26313, lng: -75.4347},
    { lat: 44.92788, lng: -76.54078},
    { lat: 45.037705, lng: -76.28578},
    { lat: 45.235899, lng: -74.92616},
    { lat: 44.17007, lng: -77.61218},
    { lat: 44.34218, lng: -77.172621},
    { lat: 43.1115, lng: -81.6319},
    { lat: 43.06438, lng: -80.77606},
    { lat: 44.18758, lng: -77.95981},
    { lat: 44.1874562, lng: -77.959885},
    { lat: 44.8075, lng: -76.7092},
    { lat: 44.97832, lng: -79.20507},
    { lat: 43.52792, lng: -80.44529},
    { lat: 42.9907, lng: -81.4635},
    { lat: 42.6599, lng: -81.30346},
    { lat: 42.91828, lng: -79.69474},
    { lat: 43.13347, lng: -81.9819},
    { lat: 44.91278, lng: -78.63327},
    { lat: 44.98685, lng: -78.00826},
    { lat: 43.70064, lng: -80.99253},
    { lat: 43.2996, lng: -80.2139},
    { lat: 42.732, lng: -80.7581},
    { lat: 43.0716, lng: -81.177},
    { lat: 45.2579, lng: -79.2169},
    { lat: 46.06278, lng: -79.43719},
    { lat: 46.0668, lng: -79.4559},
    { lat: 46.18907, lng: -84.04116}
  ];
  © 2022 GitHub, Inc.
  Terms
  Privacy
  Security
  Status
  