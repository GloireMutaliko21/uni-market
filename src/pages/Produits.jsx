import React from 'react'

import { useStateContext } from "../context/ContextProvider";
import { getData } from "../hooks/useFetch";
import { productsColumns } from "../data/tablesData";
import TableData from '../components/TableData';

const Produits = () => {
    const { token, setToken, products, setProducts } = useStateContext();
    const [data] = getData(
        products,
        setProducts,
        '/produit/find/2'
    )
    return (
        <div className=''>
            <h2 className='text-3xl font-black mx-10'>Produits</h2>
            <TableData
                data={data}
                colomnsData={productsColumns}
            />
        </div>
    )
}

export default Produits