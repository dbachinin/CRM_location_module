import React from 'react'
import $ from 'jquery';
import "bootstrap"

class Sidebar extends React.Component {

  render() {
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
  </div>


  {/* <!-- Content --> */}
  <div id="content">
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#"><i className="zmdi zmdi-notifications text-danger"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>


    <div className="container-fluid">
    <h1>{this.props.name}</h1>
    </div>


    
  </div>
</div>
    </React.Fragment> )}
}

export default Sidebar