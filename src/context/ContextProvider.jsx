/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [start, setStart] = useState(false);
    const [showDialog, setShowDialog] = useState(false)

    const handleChangeStart = () => {
        setStart(prevState => (!prevState))
    }

    return (
        <StateContext.Provider
            value={{
                start, setStart, handleChangeStart,
                showDialog, setShowDialog
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)