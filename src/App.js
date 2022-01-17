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
    OnlineUsers: [{ UserId: "" }],
    Baskets: [{UserId:"" ,ProductId: "", Count: 0 }],
    Filters:[{Brand="", Model="", Id=""}],
    pagenumber: 0, //0=login, 1=Dashboard
    CurrentUserId: 0,
    loginerror: false,
  };
  handleloginclick(UName, Password) {
    let Uid = null;
    this.state.Users.map((user) =>
      UName === user.UserName && Password === user.UserPw
        ? (Uid = user)
        : this.setState({ loginerror: true })
    );
    if (Uid != null)
    {
        this.setState({OnlineUsers:Uid});
        this.setState({CurrentUserId:Uid});
    }
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
            <Stack
              sx={{ position: "absolute", bottom: "2vh", right: "15%" }}
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
              spacing={2}
            >
              <Alert
                sx={{
                  backgroundColor: "white",
                  borderLeft: "red",
                  borderLeftStyle: "solid",
                }}
                severity="error"
                onClose={() => {
                  this.setState({ loginerror: false });
                }}
              >
                <AlertTitle>
                  <strong>Hata</strong>
                </AlertTitle>
                Kullanıcı Adı veya Şifreniz Hatalı
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
