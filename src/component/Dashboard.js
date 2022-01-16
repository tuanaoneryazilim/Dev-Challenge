import React, { Component } from "react";
import Productlist from "./Products";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Productlist></Productlist>
      </div>
    );
  }
}
