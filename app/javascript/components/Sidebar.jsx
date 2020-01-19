import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "bootstrap"
import { Grid, GridColumn, GridDetailRow, GridToolbar } from '@progress/kendo-react-grid';
import styled from 'styled-components';

class Sidebar extends React.Component {

  render() {
    console.log(typeof [{ city: 'sfsdfsdf', percent: 2}],this.props.gridData)
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
    <Grid data={Object.keys(this.props.gridData).length > 0 ? this.props.gridData : [{ city: '', percent: 0.0}]} className="mt-4">
    <GridColumn field="city" title="City" className="column" color="white" style={{color: "white"}}/>
    <GridColumn field="percent" title="Percent" className="column" color="white" />
    </Grid>
  </div>


  {/* <!-- Content --> */}

</div>
    </React.Fragment> )}
}

export default Sidebar