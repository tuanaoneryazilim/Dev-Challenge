import * as React from "react";
import { Component } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
const products = [
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
]
export default class Productlist extends Component {
  state = {
    selectbrand: "A3",
    selectmodel: "",
  };
  selectproduct = (product) => {
    this.setState({ selectid: product.productsId });
  };
  render() {
    return (
      <div>
        <h3>Vehicle Parts</h3>
      </div>
    );
  }
}
