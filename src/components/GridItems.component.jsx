import React, { useContext } from "react";
import { Datacontext } from "../providers/DataContext";

const Context = React.createContext(0);

export const GridItems = ({ titleProduct, descriptionProduct}) => {

    const {count, setCount} = useContext(Datacontext);

    const handleCoutCart = (e) => {
        setCount((e) => count + 1);
    }

    return(
        <div className="card w-25 m-4" style={{backgroundColor: "#CDF0EA"}}>
            <div className="card-body">
                <h5 className="card-title">{ titleProduct }</h5>
                <p className="card-text"> { descriptionProduct }</p>
                <button  className="btn btn-warning m-3">DETAILS</button>
                <button className="btn btn-primary" onClick={(e) => handleCoutCart(e)}>ADD TO CART</button>
            </div>
        </div>
    )
}