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
    this.modeldroptoggle = this.modeldroptoggle.bind(this);
    this.modelonClick = this.modelonClick.bind(this);
    this.brandonClick = this.brandonClick.bind(this);
  }
  state = {
    misOpen: false,
    bisOpen: false,
    currentbrand: null,
    currentmodel: null,
    currentpartno: null,
    currows: [{}], //buraya dolduruyorum zaten çekmesi gerekenleri çekmiyorbir yanlışlık var aynenbak şimdi
  };
  branddroptoggle() {
    let value = !this.state.bisOpen;
    this.setState({ bisOpen: value });
  }
  modeldroptoggle() {
    let value = !this.state.misOpen;
    this.setState({ misOpen: value });
  }
  modelonClick(e) {
    let data = [{}];
    this.setState({ currentmodel: e.target.id });
    this.props.rows.map((row) =>
      row.partmodelid === this.state.currentmodel ||
      row.partbrandid === this.state.currentbrand
        ? (data = data.concat(row))
        : null
    );
    this.setState({ currows: data });
  }
  brandonClick(e) {
    let data = [{}];
    this.setState({ currentbrand: e.target.id });
    this.props.rows.map((row) =>
      row.partmodelid === this.state.currentmodel ||
      row.partbrandid === this.state.currentbrand
        ? (data = data.concat(row))
        : null
    );
    this.setState({ currows: data });
  }
  render() {
    return (
      <div className="Dashboard">
        <Dropdown
          className="dashdrop"
          isOpen={this.state.bisOpen}
          toggle={() => this.branddroptoggle()}
        >
          <DropdownToggle className="dashdroptoggle" caret>
            <h6 className="droptext">Marka</h6>
          </DropdownToggle>
          <DropdownMenu>
            {this.props.brands.map((brand) => (
              <DropdownItem
                id={brand.brandid}
                onClick={(e) => this.brandonClick(e)}
              >
                {brand.brandname}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown
          className="dashdrop"
          isOpen={this.state.misOpen}
          toggle={() => this.modeldroptoggle()}
        >
          <DropdownToggle className="dashdroptoggle" caret>
            <h6 className="droptext">Model</h6>
          </DropdownToggle>
          <DropdownMenu>
            {this.props.models.map((model) => (
              <DropdownItem
                id={model.modelid}
                onClick={(e) => this.modelonClick(e)}
              >
                {model.modelname}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <StickyHeadTable rows={this.props.rows}></StickyHeadTable>
        <Basket></Basket>
      </div>
    );
  }
}
