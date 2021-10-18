import React, { useContext } from "react";
import { datacontext } from "../dataContext";

export const Header = ({title}) => {

  const {count} = useContext(datacontext);

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="navbar-brand" href="#">{title}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cart ({count})</a>
                </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
}