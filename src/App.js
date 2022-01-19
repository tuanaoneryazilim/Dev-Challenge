import "./App.css";
import LoginPage from "./component/LoginPage";
import Dashboard from "./component/Dashboard";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import React, { Component } from "react";
import { Stack } from "@mui/material";

const rows = [
  {
    img: "",
    partno: "10012423",
    partname: "Dikachu",
    price: 197.35,
    partmodelid: "1",
    partbrandid: "1",
  },
  {
    img: "",
    partno: "14278569",
    partname: "Pikachu",
    price: 15.35,
    partmodelid: "2",
    partbrandid: "2",
  },
  {
    img: "",
    partno: "55423610",
    partname: "Raiju",
    price: 20.35,
    partmodelid: "1",
    partbrandid: "2",
  },
  {
    img: "",
    partno: "78487845",
    partname: "Pichu",
    price: 1.35,
    partmodelid: "2",
    partbrandid: "1",
  },
  {
    img: "",
    partno: "68959638",
    partname: "Raichu",
    price: 53.35,
    partmodelid: "3",
    partbrandid: "3",
  },
];

const brands = [
  {
    brandid: "1",
    brandname: "marka1",
  },
  {
    brandid: "2",
    brandname: "marka2",
  },
  {
    brandid: "3",
    brandname: "marka3",
  },
];

const models = [
  {
    modelid: "1",
    modelname: "model1",
  },
  {
    modelid: "2",
    modelname: "model2",
  },
  {
    modelid: "3",
    modelname: "model3",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleloginclick = this.handleloginclick.bind(this);
  }
  state = {
    Users: [
      { UserId: "1", UserName: "admin", UserPw: "admin" },
      { UserId: "2", UserName: "root", UserPw: "root" },
    ],
    OnlineUsers: [{ }],
    Baskets: [{ UserId: "", ProductId: "", Count: 0 }],
    Filters: [{ Brand: "", Model: "", Id: "" }],
    pagenumber: 0, //0=login, 1=Dashboard
    CurrentUserId:{},
    loginerror: false,
  };
  handleloginclick(UName, Password) {
    let Uid = null;
    this.state.Users.map((user) =>
      UName === user.UserName && Password === user.UserPw
        ? (Uid = user)
        : this.setState({ loginerror: true })
    );
    if (Uid != null) {
      this.setState({ OnlineUsers: this.state.OnlineUsers.concat(Uid) });
      this.setState({ CurrentUser: Uid });
      this.setState({ pagenumber: 1 });
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
          <Dashboard
            rows={rows}
            brands={brands}
            models={models}
            CurrentUser={this.state.CurrentUser}
          ></Dashboard>
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
