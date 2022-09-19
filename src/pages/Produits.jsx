import React from 'react'
import { MdAdd } from "react-icons/md";

import { useStateContext } from "../context/ContextProvider";
import { getData } from "../hooks/useFetch";
import { productsColumns } from "../data/tablesData";
import TableData from '../components/TableData';
import Button from '../components/Button';

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
            <div className='flex justify-end mr-10'>
                <Button
                    label='Nouveau'
                    icon={<MdAdd />}
                    onClick={() => { }}
                    style='flex justify-center bg-teal-900 hover:bg-teal-800 text-white font-semibold p-2'
                />
            </div>
            <TableData
                data={data}
                colomnsData={productsColumns}
            />
        </div>
    )
}

export default Produits