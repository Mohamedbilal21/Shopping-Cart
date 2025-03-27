import { useState } from "react";
import "./App.css";
import Product from "./Components/Product/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import {CartProvider} from "./Context/Cart/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <Product />
      </CartProvider>
    </>
  );
}

export default App;
