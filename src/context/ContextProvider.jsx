/* eslint-disable no-unused-vars */
import React, { createContext, useContext, memo, useState, useRef, } from "react";

const StateContext = createContext();

export const ContextProvider = memo(({ children }) => {
    const [boolingState, setBoolingState] = useState({
        loginStatus: false,
        start: false,
        showPassword: false,
        showAlert: false,
        changePassWord: false,
        formProduct: false,
        addProductApprov: false,
        formCategProduct: false,
        registerSuccess: false,
    });
    const [typeAlert, setTypeAlert] = useState();
    const [userData, setUserData] = useState({});
    const [token, setToken] = useState('');

    const [getData, setGetData] = useState(true);
    const [products, setProducts] = useState([]);
    const [categProducts, setCategProducts] = useState([]);
    const [addData, setAddData] = useState({
        addProduct: {
            designation: "",
            pu: "",
            qtealert: "",
            unite: "",
            codeCategorie: null,
            refAgence: 1
        },
        addCategorie: {
            designation: "",
            refAgence: 1
        },
        addApprov: {
            designation: "",
            pu: "1",
            qte: "1",
            lo: "000",
            dateExpiration: new Date().toISOString().slice(0, 10)
        }
    });

    const [panierApprov, setPanierApprov] = useState([]);
    const updatePanierApprov = [...panierApprov];

    const [isFilter, setIsFilter] = useState('');

    const handleChangeIsFilter = (e) => {
        setIsFilter(e.target.value)
    }

    const rememberMe = useRef();
    const sidebar = useRef();

    return (
        <StateContext.Provider
            value={{
                boolingState, setBoolingState,
                typeAlert, setTypeAlert,
                userData, setUserData,
                rememberMe,
                sidebar,
                token, setToken,
                getData, setGetData,
                products, setProducts,
                categProducts, setCategProducts,
                addData, setAddData,
                panierApprov, setPanierApprov,
                updatePanierApprov,
                isFilter, handleChangeIsFilter,
            }}
        >
            {children}
        </StateContext.Provider>
    )
});

export const useStateContext = () => useContext(StateContext)