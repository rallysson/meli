import React from "react";
import { Router } from "@reach/router";

import Header from "./components/Header";
import ProductList from "./containers/ProductsList";
import Product from "./containers/Product";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Router>
          <ProductList path="/items" />
          <Product path="/items/:id" />
        </Router>
      </main>
    </>
  );
}

export default App;
