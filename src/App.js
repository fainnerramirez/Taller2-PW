import React from "react";
import { Header } from "./components/Header.component";
import { Productos } from "./components/Producto.component";
import {GridProducts} from "./components/GridProducts.component";
import { DataProvider } from "./dataContext";

const App = () => {
  return (
   <div>
     <DataProvider>
        <Header title="Store" />
        <Productos title="STORE" description="This is store Page" />
        <GridProducts />
     </DataProvider>
   </div>
  );
}

export default App;