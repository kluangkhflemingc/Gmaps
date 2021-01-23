function degreeMap() {
    // The location of the University of Toronto (St. George Campus)
    const uoft = { lat: 43.6629, lng: -79.3957 };
    // The map, centered at the University of Toronto
    const map = new google.maps.Map(document.getElementById("degreeMap"), {
      zoom: 16,
      center: uoft,
      mapTypeId: 'hybrid',
    });
    // The marker, positioned at the University of Toronto
    const marker = new google.maps.Marker({
      position: uoft,
      map: map,
    });
  }

  function clusterMap() {
    const parkmap = new google.maps.Map(document.getElementById("parksMap"), {
      zoom: 5,
      center: { lat: 50.558825, lng: -84.690299 },
      mapTypeId: 'terrain',
    });
    // Create an array of alphabetical characters used to label the markers.
    // const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        // label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(parkmap, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  const locations = [
    { lat: 49.758123, lng: -92.65349 },
    { lat: 45.442046, lng: -78.820583 },
    { lat: 48.17812017, lng: -90.22694426 },
    { lat: 45.3915, lng: -79.214 },
    { lat: 44.843699,lng: -80.002699 },
    { lat: 44.62555, lng: -78.85738 },
    { lat: 44.601, lng: -79.4829 },
    { lat: 46.944168, lng: -84.551017 },
    { lat: 47.352455, lng: -81.997528 },
    { lat: 49.904122, lng: -93.469178 },
    { lat: 44.8972, lng: -77.2095 },
    { lat: 45.65729, lng: -77.57886},
    { lat: 43.40684, lng: -79.76889 },
    { lat: 49.068974, lng: -93.904116 },
    { lat: 44.50176, lng: -76.04133 },
    { lat: 46.217628, lng: -82.070231 },
    { lat: 44.53622, lng: -80.34897 },
    { lat: 43.8755, lng: -78.777834 },
    { lat: 46.18, lng: -77.84 },
    { lat: 44.150159, lng: -79.898905 },
    { lat: 44.340451, lng: -78.53435 },
    { lat: 48.281932, lng: -79.872539 },
    { lat: 46.47, lng: -81.44 },
    { lat: 44.2908, lng: -77.7858 },
    { lat: 47.054987, lng: -79.804448 },
    { lat: 45.482113, lng: -76.213731 },
    { lat: 43.81636964, lng: -80.01141257 },
    { lat: 46.018035, lng: -80.583773 },
    { lat: 44.504167, lng: -76.555833 },
    { lat: 49.838087, lng: -83.922523 },
    { lat: 45.91768, lng: -80.55927 },
    { lat: 46.91, lng: -81.63 },
    { lat: 44.30039235, lng: -81.57963959 },
    { lat: 48.152309, lng: -82.513872 },
    { lat: 42.605, lng: -81.4448 },
    { lat: 48.404476, lng: -89.62667 },
    { lat: 47.8011908, lng: -79.87924005 },
    { lat: 45.05499, lng: -77.87313 },
    { lat: 48.572301, lng: -80.891863 },
    { lat: 46.012567, lng: -81.401889 },
    { lat: 45.35886, lng: -80.21344 },
    { lat: 42.95044912, lng: -81.39506607 },
    { lat: 47.386069, lng: -80.529034 },
    { lat: 45.319828, lng: -78.023067 },
    { lat: 47.722989, lng: -84.811803 },
    { lat: 44.039956, lng: -77.056496 },
    { lat: 42.5834, lng: -80.3829 },
    { lat: 44.408899, lng: -81.446512 },
    { lat: 49.690468, lng: -86.902049 },
    { lat: 47.597126, lng: -80.374851 },
    { lat: 44.586034, lng: -79.360174 },
    { lat: 44.296983, lng: -78.270292 },
    { lat: 46.733831, lng: -79.803357 },
    { lat: 44.569, lng: -79.329 },
    { lat: 45.821413, lng: -79.512874 },
    { lat: 45.800503, lng: -82.726107 },
    { lat: 48.404334, lng: -83.521872 },
    { lat: 46.57873, lng: -82.723984 },
    { lat: 44.0477951, lng: -80.07415366 },
    { lat: 44.78201781, lng: -76.23773575 },
    { lat: 49.456218, lng: -84.696496 },
    { lat: 43.953448, lng: -77.522129 },
    { lat: 48.78764, lng: -86.603851 },
    { lat: 45.309631, lng: -79.963983 },
    { lat: 47.14062, lng: -80.308512 },
    { lat: 49.973826, lng: -92.138543 },
    { lat: 48.766486, lng: -88.670826 },
    { lat: 45.40646576, lng: -78.8890435 },
    { lat: 50.766486, lng: -93.43209 },
    { lat: 46.969783, lng: -84.702083 },
    { lat: 44.621922, lng: -78.0477976 },
    { lat: 48.003692, lng: -89.580631 },
    { lat: 43.8052, lng: -81.713 },
    { lat: 42.65499, lng: -81.012649 },
    { lat: 42.646896, lng: -80.811954 },
    { lat: 47.958493, lng: -84.26831 },
    { lat: 44.0101, lng: -77.7416 },
    { lat: 48.675, lng: -91.1258 },
    { lat: 48.839408, lng: -87.4438656 },
    { lat: 49.417357, lng: -82.139301 },
    { lat: 46.06529, lng: -79.76884 },
    { lat: 45.059854, lng: -75.671649 },
    { lat: 42.8568061, lng: -79.5507386 },
    { lat: 42.324081, lng: -81.847002 },
    { lat: 49.6816, lng: -94.2359 },
    { lat: 46.29, lng: -78.86 },
    { lat: 43.91122, lng: -77.24169 },
    { lat: 49.467516, lng: -91.545418 },
    { lat: 44.6734319, lng: -81.2570725 },
    { lat: 42.815804, lng: -79.957876 },
    { lat: 44.764794, lng: -76.72384 },
    { lat: 44.3217, lng: -79.325 },
    { lat: 44.92306, lng: -78.07121 },
    { lat: 48.68388629, lng: -89.60598495 },
    { lat: 49.429325, lng: -94.047582},
    { lat: 44.82982, lng: -76.57669 },
    { lat: 44.88824, lng: -79.75216 },
    { lat: 48.50637, lng: -88.728676 },
    { lat: 47.197998, lng: -80.693104 },
    { lat: 46.411881, lng: -81.844265},
    { lat: 44.441793, lng: -79.758725 },
    { lat: 45.62355, lng: -80.41577 },
    { lat: 46.720316, lng: -80.363981},
    { lat: 45.16050292, lng: -79.9717354 },
    { lat: 43.24841, lng: -81.82342 },
    { lat: 51.22, lng: -80.65 },
    { lat: 42.700398, lng: -80.329666 },
    { lat: 45.55561, lng: -74.4449 },
    { lat: 50.59, lng: -89.55 },
    { lat: 47.33304, lng: -82.523814 },
    { lat: 44.4985, lng: -80.047283 },
    { lat: 42.090666, lng: -82.442196 },
    { lat: 48.713534, lng: -85.649972 },
    { lat: 46.622078, lng: -81.455217 },
    { lat: 51.104, lng: -94.288 },
  ];

function earthquakeMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: new google.maps.LatLng(2.8, -187.3),
    mapTypeId: "satellite",
  });
  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp";
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function (results) {
  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    const image = "images/flag.png"
    new google.maps.Marker({
      position: latLng,
      map: map,
      icon: image,
    });
  }
};