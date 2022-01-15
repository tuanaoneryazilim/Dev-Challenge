import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPanel from "./LoginPanel";
import loginlogo from "../img/otokoclogo.jpg";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="LoginLogo">
          <img src={loginlogo} style={{width:'100%', height:'100%'}}></img>
        </div>
        <LoginPanel
          handler={this.handleloginclick}
          class={this.props.class}
        ></LoginPanel>
      </div>
    );
  }
}
