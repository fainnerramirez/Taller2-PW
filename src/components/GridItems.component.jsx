import React, { useContext, useState } from "react";
import { Datacontext } from "../providers/DataContext";

const Context = React.createContext(0);

export const GridItems = () => {

    const {count, setCount} = useContext(Datacontext);

    const handleCoutCart = (e) => {
        setCount((e) => count + 1);
    }

    return(
        <div className="card w-25 m-4" style={{backgroundColor: "#CDF0EA"}}>
            <div className="card-body">
                <h5 className="card-title">Producto title</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-warning m-3">DETAILS</a>
                <a href="#" className="btn btn-primary" onClick={(e) => handleCoutCart(e)}>ADD TO CART</a>
            </div>
        </div>
    )
}