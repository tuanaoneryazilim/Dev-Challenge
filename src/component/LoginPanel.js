import React, { Component } from "react";
import { FormGroup, Input, Button } from "reactstrap";

export default class LoginPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { UserName: "", UserPw: "" };
    this.namechange = this.namechange.bind(this);
    this.pwchange = this.pwchange.bind(this);
  }
  namechange(e) {
    this.setState({ UserName: e.target.value });
  }
  pwchange(e) {
    this.setState({ UserPw: e.target.value });
  }
  render() {
    return (
      <div>
        <div className={this.props.class}>
          <h3 font="bold">Giriş</h3>
          <FormGroup>
            <Input
              id="Email"
              name="email"
              placeholder="Email / Kullanıcı Adı"
              type="email"
              value={this.state.UserName}
              onChange={this.namechange}
            />
            <p></p>
            <Input
              id="Password"
              name="password"
              placeholder="Şifre"
              type="password"
              value={this.state.UserPw}
              onChange={this.pwchange}
            />
            <p></p>
            <Button
              color="secondary"
              outline
              onClick={() =>
                this.props.handler(this.state.UserName, this.state.UserPw)
              }
            >
              Giriş Yap >
            </Button>
          </FormGroup>
        </div>
      </div>
    );
  }
}
