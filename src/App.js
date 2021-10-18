import React from "react";
import { Header } from "./components/Header.component";
import { Productos } from "./components/Producto.component";
import {GridProducts} from "./components/GridProducts.component";
import { DataProvider } from "./dataContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "./components/Home.component";
import { About } from "./components/About.component";

const App = () => {
  return (
   <div>
     <DataProvider>   
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
        </Switch>
      </Router>
     </DataProvider>
   </div>
  );
}

export default App;