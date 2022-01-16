import "./App.css";
import LoginPage from "./component/LoginPage";
import Dashboard from "./component/Dashboard";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import React, { Component } from "react";
import { Stack } from "@mui/material";

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
      if (!this.state.loginerror) {
        return (
          <div>
            <LoginPage
              handler={this.handleloginclick}
              class="LoginPanel"
            ></LoginPage>
          </div>
        );
      } else {
        return (
          <div>
            <LoginPage
              handler={this.handleloginclick}
              class="LoginPanel"
            ></LoginPage>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
              </Alert>
            </Stack>
          </div>
        );
      }
    } else if (this.state.pagenumber === 1) {
      return (
        <div>
          <Dashboard></Dashboard>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Empty Page</h2>
        </div>
      );
    }
  }
}
