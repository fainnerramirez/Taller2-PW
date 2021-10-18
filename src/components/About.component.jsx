import React from "react";
import { Header } from "./Header.component";

export const About = () => {
    return(
       <div>
            <Header title="Store" /> 
            <h1>
                Esta app es creada por <span class="text-danger">Fainner Ramirez</span> y <span class="text-success">Carlos Borrego</span>
            </h1>
       </div>
    )
}