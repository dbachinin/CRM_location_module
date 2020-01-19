import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Map from "./MyGoogleMap";


class Partner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { partner: { merchants: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.response = {};
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/partners/show/${id}?radius=0.1`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {
        this.response = response; 
        this.setState((state,props) => ({ partner: props.response })) 
      })
      .catch(() => this.props.history.push("/partners"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  render() {
    const { partner } = this.state;
    let ingredientList = "No p_locations available";
    // if (partner.p_locations.length > 0) {
    //   ingredientList = partner.p_locations
    //     .split(",")
    //     .map((ingredient, index) => (
    //       <li key={index} className="list-group-item">
    //         {ingredient}
    //       </li>
    //     ));
    // }
    // const recipeInstruction = this.addHtmlEntities(partner.p_locations);

    return (
        <>
        <Sidebar name={this.response.name} />
        <h3>Content</h3>
        <Map center={this.response.avg_locations} p_locations={this.response.p_locations} />

        </>);
    }

}

export default Partner;