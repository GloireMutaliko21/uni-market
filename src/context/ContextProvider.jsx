/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [start, setStart] = useState(false)

    const handleChangeStart = () => {
        setStart(prevState => (!prevState))
    }

    return (
        <StateContext.Provider
            value={{
                start, setStart, handleChangeStart
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)