import React, { Component, Fragment } from "react";
import MarkerIcom from 'images/marker.png'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


class MyGoogleMap extends Component {

  static defaultProps = {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCxyGgzW6VWBucCHRiejfNwV2W7eYTPadc&libraries=geometry,drawing,places",
  }
  static getDerivedStateFromProps(props, state) {
    if (state.markers && Object.keys(state.markers).length == 0 && props.p_locations) {
      let markers = props.p_locations.map((i) => (i.merchants[0].m_coords.map((marker, key) => {
        return (
          <Marker
            key={key}
            position={marker}
          >
          </Marker>
        )
      })))
      return {
        markers: markers,
        loadmarkers: true
      }
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      markers: {},
      loadmarkers: false
    };
    this.markers = {}
    this.marker_icon = {
      src: MarkerIcom,
      className: 'marker_icn',
      alt: 'Mrk'
    }
    this.map
  }

  CMap = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 47.254606, lng: 39.7526 }}
    >
      {props.children}
    </GoogleMap>
  ));

  render() {
    // if (this.state.loadmarkers) {
    return (
      <Fragment>
        <this.CMap
          googleMapURL={this.props.googleMapURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `650px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          center={this.props.center ? this.props.center : { lat: 47.183856, lng: 39.5822465 }}
        >
          {this.state.loadmarkers ?
            this.state.markers
            :
            <Marker
              position={{ lat: 47.254606, lng: 39.7526 }}
            />
          }
          
                </this.CMap>
      </Fragment>
    );
    // }
  }
}


export default MyGoogleMap;





