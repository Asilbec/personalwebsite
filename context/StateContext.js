import React, { createContext, useContext, useState, useEffect } from 'react';
const Context = createContext();
export const StateContext = ({ children }) => {
    const [theme, newtheme] = useState(true)

    const changetheme = (state) => {
        if (theme) newtheme(false)
        else {
            newtheme(true)
        }
    }
    return (
        <Context.Provider
            value={{
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
