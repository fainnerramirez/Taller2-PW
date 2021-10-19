import React from "react";
import { Home } from "./components/Home.component";
import { About } from "./components/About.component";
import { NotFound404 } from "./components/NotFound404.component";
import { DataProvider } from "./providers/DataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
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
            <Route path="*">
              <NotFound404 />
            </Route>
        </Switch>
      </Router>
     </DataProvider>
   </div>
  );
}