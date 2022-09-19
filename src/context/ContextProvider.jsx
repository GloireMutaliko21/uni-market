/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useRef, } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [start, setStart] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [showDialog, setShowDialog] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [typeAlert, setTypeAlert] = useState();
    const [userData, setUserData] = useState({});
    const [token, setToken] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);

    const [products, setProducts] = useState([]);

    const rememberMe = useRef();
    const sidebar = useRef();

    const handleChangeStart = () => {
        setStart(prevState => (!prevState))
    }

    return (
        <StateContext.Provider
            value={{
                start, setStart, handleChangeStart,
                showPassword, setShowPassword,
                showDialog, setShowDialog,
                showAlert, setShowAlert,
                typeAlert, setTypeAlert,
                userData, setUserData,
                loginStatus, setLoginStatus,
                rememberMe,
                sidebar,
                token, setToken,
                products, setProducts
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)