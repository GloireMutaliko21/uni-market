/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useRef, } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [start, setStart] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [showDialog, setShowDialog] = useState(false);
    const [userData, setUserData] = useState({});
    const [loginStatus, setLoginStatus] = useState(false);

    const rememberMe = useRef();

    const handleChangeStart = () => {
        setStart(prevState => (!prevState))
    }

    return (
        <StateContext.Provider
            value={{
                start, setStart, handleChangeStart,
                showPassword, setShowPassword,
                showDialog, setShowDialog,
                userData, setUserData,
                loginStatus, setLoginStatus,
                rememberMe,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)