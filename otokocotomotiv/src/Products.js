import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Productlist extends Component {
  state = {
    products: [
      {
        productsimgloc: <img src="url" alt="Resim"></img>,
        productsId: 1,
        productsname: "Parça0",
        productsbrand: "T8",
        productsmodel: "Mod9",
        price: 1000,
      },
      {
        productsimg: <img src="url" alt="Resim"></img>,
        productsId: 2,
        productsname: "Parça1",
        productsbrand: "T1",
        productsmodel: "Mod1",
        price: 1000,
      },
      {
        productsimg: <img src="url" alt="Resim"></img>,
        productsId: 3,
        productsname: "Parça2",
        productsbrand: "T5",
        productsmodel: "Mod2",
        price: 1000,
      },
      {
        productsimg: <img src="url" alt="Resim"></img>,
        productsId: 4,
        productsname: "Parça3",
        productsbrand: "A3",
        productsmodel: "Mod4",
        price: 1000,
      },
    ],selectbrand:"A3",selectmodel:""
  };
  selectproduct = (product) => {
    this.setState({selectid:product.productsId});
  }
  render() {
    return (
      <div>
          <h3>Vehicle Parts</h3>
        <ListGroup>
          {this.state.products.map(product => ( product.productsbrand == this.state.selectbrand ?
            <ListGroupItem onClick={() => this.selectproduct(product)} key={product.productsId}>{product.productsname}</ListGroupItem>:null
          ))}
        </ListGroup>
      </div>
    );
  }
}