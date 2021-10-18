import React from "react";
import { Header } from "./components/Header.component";
import { Productos } from "./components/Producto.component";
import {GridProducts} from "./components/GridProducts.component";

const App = () => {
  return (
   <div>
      <Header title="Store"  />
      <Productos title="STORE" description="This is store Page" />
      <GridProducts />
   </div>
  );
}

export default App;