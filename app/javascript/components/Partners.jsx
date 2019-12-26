import React from "react";
import { Link } from "react-router-dom";

class Partners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/partners/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ partners: response }))
      .catch(() => this.props.history.push("/"));
}

render() {
    const { partners } = this.state;
    const allMerchants = partners.map((partner, index) => (
      <div key={index} className="col-md-6 col-lg-3">
        <div className="card mb-4">

          <div className="card-body">
            <h5 className="card-title">{partner.name}</h5>
            <p>Count of locations - {partner.location_count}</p>
            <Link to={`/partner/${partner.id}`} className="btn custom-button">
              View Merchant
            </Link>
          </div>
        </div>
      </div>
    ));
    const noMerchant = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No partners yet. Why not <Link to="/new_merchant">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
        <h1 className="display-4">Partners</h1>
          <div className="container py-5">
            
            <p className="lead text-muted">
              We’ve pulled together our most popular recipes, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/partner" className="btn custom-button">
                Create New Merchant
              </Link>
            </div>
            <div className="row">
              {partners.length > 0 ? allMerchants : noMerchant}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }

}
export default Partners;