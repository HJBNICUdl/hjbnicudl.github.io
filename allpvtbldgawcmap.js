// The following example creates five accessible and
// focusable markers.
function allpvtbldganganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center:{ lat:26.832088, lng:92.062262} ,
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.832088, lng:92.062262}, "Vill - Jangal Borigaon  Po - Khawrang Pin- 784509,  18326050124,  "],




    
  ];


  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
