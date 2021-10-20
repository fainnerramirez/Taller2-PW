import React, { useState } from "react";
import { GridItems } from "./GridItems.component";

export const GridProducts = () => {

    const [ products, setProducts ] = useState(
        [
            { id:1, titleProduct: "product 1", descriptionProduct: "this is product of some" },
            { id:2, titleProduct: "product 2", descriptionProduct: "this is product of some" },
            { id:3, titleProduct: "product 3", descriptionProduct: "this is product of some" },
            { id:4, titleProduct: "product 4", descriptionProduct: "this is product of some" },
            { id:5, titleProduct: "product 5", descriptionProduct: "this is product of some" },
            { id:6, titleProduct: "product 6", descriptionProduct: "this is product of some" },
            { id:7, titleProduct: "product 7", descriptionProduct: "this is product of some" },
            { id:8, titleProduct: "product 8", descriptionProduct: "this is product of some" },
            { id:9, titleProduct: "product 9", descriptionProduct: "this is product of some" },
        ]
    );

    return(
        <div className="d-flex justify-content-center flex-wrap">
           {
               products.map(product => {
                return <GridItems 
                        key = {product.id} 
                        titleProduct = { product.titleProduct }
                        descriptionProduct = { product.descriptionProduct }
                    />
               })
           }
        </div>
    )
}