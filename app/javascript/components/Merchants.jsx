import React from "react";
import { Link } from "react-router-dom";

class Merchants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      merchants: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/merchants/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ merchants: response }))
      .catch(() => this.props.history.push("/"));
}

render() {
    const { merchants } = this.state;
    const allMerchants = merchants.map((merchant, index) => (
      <div key={index} className="col-md-6 col-lg-3">
        <div className="card mb-4">

          <div className="card-body">
            <h5 className="card-title">{merchant.name}</h5>
            <p>Count of locations - {merchant.location_count}</p>
            <Link to={`/merchant/${merchant.id}`} className="btn custom-button">
              View Merchant
            </Link>
          </div>
        </div>
      </div>
    ));
    const noMerchant = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No merchants yet. Why not <Link to="/new_merchant">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Merchants</h1>
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
              <Link to="/merchant" className="btn custom-button">
                Create New Merchant
              </Link>
            </div>
            <div className="row">
              {merchants.length > 0 ? allMerchants : noMerchant}
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
export default Merchants;