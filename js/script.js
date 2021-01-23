function degreeMap() {
    // The location of the University of Toronto (St. George Campus)
    const uoft = { lat: 43.6629, lng: -79.3957 };
    // The map, centered at the University of Toronto
    const map = new google.maps.Map(document.getElementById("degreeMap"), {
      zoom: 16,
      center: uoft,
      mapTypeId: 'hybrid'
    });
    // The marker, positioned at the University of Toronto
    const marker = new google.maps.Marker({
      position: uoft,
      map: map,
    });
  }