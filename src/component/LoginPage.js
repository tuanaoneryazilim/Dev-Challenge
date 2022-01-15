import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPanel from "./LoginPanel";

export default class LoginPage extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="LoginLogo">
          <img src="./placeholder-image.png"></img>
        </div>
        <LoginPanel handler={this.handleloginclick} class={this.props.class}></LoginPanel>
      </div>
    );
  }
}
