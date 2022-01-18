import React, { Component } from "react";
import { Dropdown, DropdownItem } from "reactstrap";
import StickyHeadTable from "./Products";
import HashTable from "./HashTable";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  dropitem(drp) {
    data = [{}];
    data.map(dt => );
    if (drp === 0) {
      bt.forEach(myFunction);
      function myFunction(item) {
        <DropdownItem>item</DropdownItem>;
      }
    }
  }
  render() {
    return (
      <div className="Dashtable">
        <Dropdown>{this.dropitem(0)}</Dropdown>
        <StickyHeadTable rows={this.props.rows}></StickyHeadTable>
      </div>
    );
  }
}
