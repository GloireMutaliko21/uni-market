/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useRef, } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [boolingState, setBoolingState] = useState({
        loginStatus: false,
        start: false,
        showPassword: false,
        changePassWord: false,
        formProduct: false,
        formCategProduct: false,
        registerSuccess: false,
    });
    const [showAlert, setShowAlert] = useState(false);
    const [typeAlert, setTypeAlert] = useState();
    const [userData, setUserData] = useState({});
    const [token, setToken] = useState('');

    const [getData, setGetData] = useState(true);
    const [products, setProducts] = useState([]);
    const [categProducts, setCategProducts] = useState([]);

    const rememberMe = useRef();
    const sidebar = useRef();

    return (
        <StateContext.Provider
            value={{
                boolingState, setBoolingState,
                showAlert, setShowAlert,
                typeAlert, setTypeAlert,
                userData, setUserData,
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