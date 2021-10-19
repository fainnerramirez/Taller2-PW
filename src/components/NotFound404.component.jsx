import React from "react";
import NotFound from "../assets/NotFound404.jpg";
import {Link} from "react-router-dom"

export const NotFound404 = () => {
    return(
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="text-center">
                <img src={NotFound} alt="image Not Found" style={{width: "80%"}} />
            </div>
            <h1>Lo sentimos, esta página no existe</h1>
            <Link to="/" className="btn btn-info text-white mt-3">Go Home</Link>
        </div>
    )
}