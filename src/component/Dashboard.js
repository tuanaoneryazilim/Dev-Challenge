import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import StickyHeadTable from "./Products";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.branddroptoggle = this.branddroptoggle.bind(this);
  }
  state = { isOpen: false };
  branddroptoggle() {
    let value = !this.state.isOpen;
    this.setState({isOpen:value});
  }

  render() {
    return (
      <div className="Dashtable">
        <Dropdown isOpen={this.state.isOpen} toggle={() => this.branddroptoggle()}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <StickyHeadTable rows={this.props.rows}></StickyHeadTable>
      </div>
    );
  }
}
