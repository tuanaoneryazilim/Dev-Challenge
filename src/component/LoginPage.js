import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPanel from "./LoginPanel";
import loginlogo from "../img/placeholder-image.png";

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <div className="LoginLogo">
          <img src={loginlogo} style={{ width: "100%", height: "100%" }}></img>
        </div>
        <LoginPanel
          handler={this.props.handler}
          class={this.props.class}
        ></LoginPanel>
      </div>
    );
  }
}
