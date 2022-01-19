import React, { Component } from "react";
import profile from "../img/generaluser.png";
import otologo from "../img/Otokoc-Otomotiv-Logo1.png";

export default class Accounts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={profile} style={{ width: "58px", height: "58px", float:"left", margin:"40px"}}></img>
        <h2 style={{ float:"left", marginTop:"40px"}}>{this.props.CurrentUser.UserName}</h2>
        <img src={otologo} style={{ width: "165px", height: "33px", float:"right", marginTop:"40px"}}></img>
      </div>
    );
  }
}
