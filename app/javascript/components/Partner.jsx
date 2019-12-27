import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";


class Partner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { partner: { merchants: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/partners/show/${id}?=0.1`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ partner: response }))
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
        <Sidebar />
        <hr3>asdasdas</hr3>
        

        </>);
    }

}

export default Partner;