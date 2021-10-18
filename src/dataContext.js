import React,{ createContext, useState } from "react";


export const datacontext = createContext();

export const DataProvider = ({children}) => {

    const [count, setCount] = useState(0);

    return(
        <datacontext.Provider value={{count, setCount}}>
            {children}
        </datacontext.Provider>
    )
}