import "./App.css";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import Productlist from "./Products";
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
  };
  handleloginclick(UName, Password) {
    this.state.Users.map((user) =>
      UName === user.UserName && Password === user.UserPw
        ? this.setState({ pagenumber: 1 })
        : alert(this.state.pagenumber)
    );
  }
  render() {
    if (this.state.pagenumber === 0) {
      return (
        <div>
          <LoginPage handler={this.handleloginclick}></LoginPage>
        </div>
      );
    } else if (this.state.pagenumber === 1) {
      return (
        <div>
          <Dashboard></Dashboard>
        </div>
      );
    }
  }
}
