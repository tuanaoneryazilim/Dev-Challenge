import { TablePagination } from "@mui/material";
import React, { Component } from "react";
import StickyHeadTable from "./Products";
import Productlist from "./Products";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <StickyHeadTable rows={this.props.rows}></StickyHeadTable>
      </div>
    );
  }
}
