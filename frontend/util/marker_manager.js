export default class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    // to convert the benches to the right 1:1 key pairs (prev. 0: 1):
    const benchObjects = {};
    benches.forEach(bench => benchObjects[bench.id] = bench);
    // filter to add only the ones not in this.markers
    benches.filter(bench => !this.markers[bench.id])
      .forEach(newBench => this.createMarkerFromBench(newBench))
  }

  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const newMarker = new google.maps.Marker({
      position,
      map: this.map,
      benchId: bench.id
    });
    this.markers[newMarker.benchId] = newMarker;
  }
}
