import React, { Component, Fragment } from "react";

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";


class MyGoogleMap extends Component{
  UNSAFE_componentWillMount() {
    if (this.props.p_locations){
      console.log(this.props)
      this.getMarkers(this.props.p_locations);
    }
  }
    static defaultProps = {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCxyGgzW6VWBucCHRiejfNwV2W7eYTPadc&libraries=geometry,drawing,places",
    }

    constructor(props) {
        super(props);
        this.state = {
          markers: ''
        };
    }

    CMap = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{lat: 47.254606, lng: 39.7526}}
        >
            {props.children}
        </GoogleMap>
      ));
      
      getMarkers(props){
        console.log(props)
        // props.p_locations.forEach(location => {
        //   console.log(location.merchants[0].coverage); 
        // });
      }


    render() {
        return (
            <Fragment>
                <this.CMap
                    googleMapURL={this.props.googleMapURL}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `700px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    center= {this.props.center ? this.props.center : {lat: 47.183856, lng: 39.5822465}} 
                >
                    <Marker
                        position={{lat: 47.254606, lng: 39.7526}}
                    />
                </this.CMap>
            </Fragment>
        );
    }
}


export default MyGoogleMap;





