import React, { useContext, useState } from "react";
import { datacontext } from "../dataContext";

const Context = React.createContext(0);

export const GridItems = () => {

    const {count, setCount} = useContext(datacontext);

    const handleCoutCart = (e) => {
        setCount((e) => count + 1);
    }

    return(
        <div class="card w-25 m-4" style={{backgroundColor: "#CDF0EA"}}>
            <div class="card-body">
                <h5 class="card-title">Producto title</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-warning m-3">DETAILS</a>
                <a href="#" class="btn btn-primary" onClick={(e) => handleCoutCart(e)}>ADD TO CART</a>
            </div>
        </div>
    )
}