import React, { useContext } from "react";
import { datacontext } from "../dataContext";
import {
  Link
} from "react-router-dom";

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
                    <Link to="/" className="navbar-brand" href="#">{title}</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link active" href="#">About</Link>
                </li>
                <li className="nav-item">
                <button type="button" class="btn btn-info">
                Cart <span class="badge badge-light">({count})</span>
              </button>
                </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
}