import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import Basket from "./Basket";
import StickyHeadTable from "./Products";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.branddroptoggle = this.branddroptoggle.bind(this);
  }
  state = { misOpen:false ,bisOpen: false, currentbrand:null, currentmodel:null, currentpartno:null};
  branddroptoggle() {
    let value = !this.state.bisOpen;
    this.setState({bisOpen:value});
  }
  modeldroptoggle() {
    let value = !this.state.misOpen;
    this.setState({misOpen:value});
  }

  render() {
    return (
      <div className="Dashboard">
        <Dropdown className="dashdrop" isOpen={this.state.bisOpen} toggle={() => this.branddroptoggle()}>
          <DropdownToggle className="dashdroptoggle" caret><h6 className="test">Marka</h6></DropdownToggle>
          <DropdownMenu>
            {this.props.brands.map(brand => <DropdownItem key={brand.brandid}>{brand.brandname}</DropdownItem>)}
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="dashdrop" isOpen={this.state.misOpen} toggle={() => this.modeldroptoggle()}>
          <DropdownToggle className="dashdroptoggle" caret><h6 className="test">Marka</h6></DropdownToggle>
          <DropdownMenu>
            {this.props.models.map(model => <DropdownItem key={model.modelid}>{model.modelname}</DropdownItem>)}
          </DropdownMenu>
        </Dropdown>
        <StickyHeadTable rows={this.props.rows}></StickyHeadTable>
        <Basket></Basket>
      </div>
    );
  }
}
