import React from 'react'
import { useStateContext } from "../context/ContextProvider";
import { getData } from "../hooks/useFetch";

const Produits = () => {
    const { token, setToken, products, setProducts } = useStateContext();
    const [data] = getData(
        products,
        setProducts,
        localStorage.getItem('token'),
        '/produit/find/2'
    )

    return (
        <div className=''>
            <h2 className='text-3xl font-black'>Produits</h2>
        </div>
    )
}

export default Produits