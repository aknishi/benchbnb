import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

const getCoordObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng(),
});

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 },
  zoom: 13
};

class BenchMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: "benches/new",
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  handleMarkerClick(bench) {
    this.props.history.push(`benches/${bench.id}`);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordObj(event.latLng);
      this.handleClick(coords)
    });
  }

  render() {
    return(
      <div id="map-container" ref="map">

      </div>
    )
  }
}

export default withRouter(BenchMap);
