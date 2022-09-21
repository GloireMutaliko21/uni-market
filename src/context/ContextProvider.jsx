/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useRef, } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [start, setStart] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [boolingState, setBoolingState] = useState({
        changePassWord: false,
        formProduct: false,
        formCategProduct: false,
        registerSuccess: false,
    });
    const [showAlert, setShowAlert] = useState(false);
    const [typeAlert, setTypeAlert] = useState();
    const [userData, setUserData] = useState({});
    const [token, setToken] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);

    const [getData, setGetData] = useState(true);
    const [products, setProducts] = useState([]);
    const [categProducts, setCategProducts] = useState([]);

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
                boolingState, setBoolingState,
                showAlert, setShowAlert,
                typeAlert, setTypeAlert,
                userData, setUserData,
                loginStatus, setLoginStatus,
                rememberMe,
                sidebar,
                token, setToken,
                getData, setGetData,
                products, setProducts,
                categProducts, setCategProducts,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)