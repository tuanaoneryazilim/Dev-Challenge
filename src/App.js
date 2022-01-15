import "./App.css";
import LoginPage from "./component/LoginPage";
import Dashboard from "./component/Dashboard";
import Productlist from "./component/Products";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleloginclick = this.handleloginclick.bind(this);
  }
  state = {
    Users: [{ UserId: "1", UserName: "admin", UserPw: "admin" }],
    pagenumber: 0, //0=login, 1=Dashboard
    CurrentUsersId: [],
    loginerror: false,
  };
  handleloginclick(UName, Password) {
    this.state.Users.map((user) =>
      UName === user.UserName && Password === user.UserPw
        ? this.setState({ pagenumber: 1 })
        : this.setState({ loginerror: true })
    );
  }
  render() {
    if (this.state.pagenumber === 0) {
      return (
        <div>
          <LoginPage
            handler={this.handleloginclick}
            class="LoginPanel"
          >
            if (loginerror) {
              <h2>Test</h2>
            }
          </LoginPage>
        </div>
      );
    } else if (this.state.pagenumber === 1) {
      return (
        <div>
          <Dashboard></Dashboard>
        </div>
      );
    } else if (this.state.pagenumber === 2) {
      <div><h2>Empty Page</h2></div>
    }
  }
}