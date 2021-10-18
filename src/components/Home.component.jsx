import React from "react";
import { Footer } from "./Footer.component";
import { GridProducts } from "./GridProducts.component";
import { Header } from "./Header.component";
import { Productos } from "./Producto.component";

export const Home = () => {
    return(
        <div>
            <Header title="Store" /> 
            <Productos title="STORE" description="This is store Page" />
            <GridProducts />
            <Footer />
        </div>
    )
}