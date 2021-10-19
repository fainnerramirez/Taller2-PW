import React from "react";
import { Header } from "./Header.component";

export const About = () => {
    return(
       <div>
            <Header title="Store" /> 
            <h3 className="text-center mt-5">
                En la creación de la interfaz colaboraron <br /> <span className="text-danger">Fainner Ramirez</span> & <span className="text-success">Carlos Borrego</span>
            </h3>
       </div>
    )
}