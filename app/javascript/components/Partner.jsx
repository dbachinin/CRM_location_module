import React from "react";
import { Link } from "react-router-dom";
import Map from "./MyGoogleMap";
import { Grid, GridColumn, GridDetailRow, GridToolbar } from '@progress/kendo-react-grid';


class Partner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { partner: { merchants: "" }, radius: this.props.location.search ? parseInt(this.props.location.search.match(/\d+/g)[0]) : 1.0 };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.response = {};
    this.radius
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.radius = this.radius ? this.radius : this.state.radius
    let url = `/api/v1/partners/show/${id}?radius=${this.radius}`;

    fetch(url)
      .then(response => {
        if (response.ok) {

          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {
        this.response = response;
        this.setState((state, props) => ({ partner: props.response }))
      })
      .catch(() => this.props.history.push("/partners"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }
  handleSubmit(event) {
    this.radius = event.target.value
    this.setState({ radius: this.radius });
  }

  handleChange(event) {
    this.radius = event.target.value
    this.setState({ radius: this.radius });

    // this.setState({radius: event.target.value});
  }

  render() {
    const { partner } = this.state;
    let ingredientList = "No p_locations available";
    let percents = this.response.p_locations ? this.response.p_locations.map((i) => i.merchants[0].coverage) : {}
    let avg_cover = Object.keys(percents).length != 0 ? percents.reduce((a, b) => { return a + b; }) / Object.keys(percents).length : 0
    let gridData = this.response.p_locations ? this.response.p_locations.map((i) => ({ city: i.city, percent: i.merchants[0].coverage })) : {}
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
      <React.Fragment>
        <div id="viewport">
          {/* <!-- Sidebar --> */}
          <div id="sidebar">
            <header>
              <a href="#">My App</a>
            </header>
            <ul className="nav">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
            </ul>
            <Grid data={Object.keys(gridData).length > 0 ? gridData : [{ city: '', percent: 0.0 }]} className="mt-4">
              <GridColumn field="city" title="City" className="column" color="white" style={{ color: "white" }} />
              <GridColumn field="percent" title="Percent" className="column" color="white" />
            </Grid>
          </div>


          {/* <!-- Content --> */}
          <div id="content">
            <div className="container-fluid">
              <h1>{this.response.name}</h1>
              <p>
                Average percent of cover
                <code> {avg_cover}</code>%
              </p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="container-fluid form-group my-1">
                <label htmlFor="roundDiameter">Round coverage km {this.radius}</label>
                <br />
                <input type="range" className="custom-range col-md-8" name="radius" id="roundDiameter" defaultValue={this.state.radius} onChange={this.handleChange} />
                <br />
                <input className="btn btn-info my-2" type="submit" value="Get coverage value" />
              </div>
              
            </form>
            <Map center={this.response.avg_locations} p_locations={this.response.p_locations} />
          </div>



        </div>
      </React.Fragment>)
  }

}

export default Partner;