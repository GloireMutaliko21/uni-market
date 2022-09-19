import React from 'react'
import { useStateContext } from "../context/ContextProvider";
import { getData } from "../hooks/useFetch";

const Produits = () => {
    const { token, setToken, products, setProducts } = useStateContext();
    const [data] = getData(
        products,
        setProducts,
        '/produit/find/2'
    )
    console.log();
    return (
        <div className=''>
            <h2 className='text-3xl font-black'>Produits</h2>
            {data.map((product) =>
                <div key={product.code}>{product.designation}</div>
            )}
        </div>
    )
}

export default Produits