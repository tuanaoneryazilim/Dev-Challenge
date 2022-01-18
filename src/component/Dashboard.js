import { TablePagination } from "@mui/material";
import React, { Component } from "react";
import { Dropdown } from "reactstrap";
import StickyHeadTable from "./Products";
import Productlist from "./Products";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /*dropitem()
  {
    let ht = new HashTable();
    return(
    )
  }*/
  render() {
    return (
      <div className="Dashtable">
        <Dropdown>
          {
            //this.dropitem()
          }
        </Dropdown>
        <StickyHeadTable rows={this.props.rows}></StickyHeadTable>
      </div>
    );
  }
}
