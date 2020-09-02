import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import "./map-style.scss";

class Map extends Component {
  state = {
    center: {
      lat: 33.677608,
      lng: -78.964981,
    },
    zoom: 15,
  };
  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyBsm0xWefh4RlscjkP3BVX1uCtQcC6odas` }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default Map;
