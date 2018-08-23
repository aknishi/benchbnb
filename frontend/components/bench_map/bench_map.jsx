import React from 'react';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 },
  zoom: 13
};

class BenchMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return(
      <div id="map-container" ref="map">

      </div>
    )
  }
}

export default BenchMap;
