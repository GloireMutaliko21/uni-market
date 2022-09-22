import React from 'react'
import { MdAdd } from "react-icons/md";

import { useStateContext } from "../context/ContextProvider";
import { getData } from "../hooks/useFetch";
import { productsColumns } from "../data/tablesData";
import TableData from '../components/TableData';
import Button from '../components/Button';
import SuccessDialg from '../components/SuccessDialg';
import FormAddProduct from '../components/Products/FormAddProduct';
import FormAddCategProduct from '../components/Products/FormAddCategProduct';

const Produits = () => {
    const {
        products, setProducts,
        boolingState, setBoolingState,
    } = useStateContext();

    const [data] = getData(
        products,
        setProducts,
        '/produit/find/1'
    );

    return (
        <div className=''>
            <h2 className='text-3xl font-black mx-10'>Produits</h2>
            <div className='flex justify-end mr-16'>
                <Button
                    label='Nouveau'
                    icon={<MdAdd className='mr-5' />}
                    onClick={() => setBoolingState({ ...boolingState, formProduct: true })}
                    style='flex justify-center bg-teal-800 hover:bg-teal-700 text-white font-semibold px-3 py-2'
                />
                {boolingState.formProduct &&
                    <FormAddProduct
                        boolingState={boolingState.formProduct}
                        setBoolingState={setBoolingState}
                        value={{ ...boolingState, formProduct: true }}
                        cancel={{ ...boolingState, formProduct: false }}
                    />
                }
                {
                    boolingState.registerSuccess && <SuccessDialg />
                }
                {boolingState.formCategProduct &&
                    <FormAddCategProduct />
                }
            </div>
            <TableData
                data={products}
                colomnsData={productsColumns}
            />
        </div>
    )
}

export default Produits