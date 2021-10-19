import React from "react";

//margin: margin-top !margin-bottom ! margin-left ! margin-right

export const Productos = ({title , description}) => {
    return(
        <div className="text-center" style={{marginTop: "100px"}}>
            <h1>{title}</h1>
            <span className="lead">{description}</span>
        </div>
    )
}