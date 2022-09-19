import React, { useMemo, useState } from 'react'
import { MdAdd } from "react-icons/md";

import { useStateContext } from "../context/ContextProvider";
import { getData } from "../hooks/useFetch";
import { productsColumns } from "../data/tablesData";
import TableData from '../components/TableData';
import Button from '../components/Button';
import Dialogue from '../components/Dialogue';
import Input from '../components/Input';

const Produits = () => {
    const [addProduct, setAddProduct] = useState({
        designation: "",
        prixUnit: "",
        stockAlert: ""
    });

    const { products, setProducts, showDialogProduct, setShowDialogProduct } = useStateContext();
    const [data] = getData(
        products,
        setProducts,
        '/produit/find/2'
    );

    const handleChange = useMemo(() =>
        (e) => {
            if (e.target.name === "designation") {
                setAddProduct({ ...addProduct, designation: e.target.value })
            }
            if (e.target.name === "prixUnit") {
                setAddProduct({ ...addProduct, prixUnit: e.target.value })
            }
            if (e.target.name === "stockAlert") {
                setAddProduct({ ...addProduct, stockAlert: e.target.value })
            }
            console.log(addProduct)
        }, [{ ...addProduct }]
    )

    return (
        <div className=''>
            <h2 className='text-3xl font-black mx-10'>Produits</h2>
            <div className='flex justify-end mr-16'>
                <Button
                    label='Nouveau'
                    icon={<MdAdd className='mr-5' />}
                    onClick={() => { setShowDialogProduct(true); console.log(showDialogProduct) }}
                    style='flex justify-center bg-teal-800 hover:bg-teal-700 text-white font-semibold px-3 py-2'
                />
                {showDialogProduct &&
                    <Dialogue
                        showDialog={showDialogProduct}
                        setShowDialog={setShowDialogProduct}
                        value={true}
                        label='Envoyer'
                        handleConfirm={() => { }}
                        title='Ajouter Produit'
                    >
                        <Input
                            label='Designation'
                            type='text'
                            name='designation'
                            onChange={handleChange}
                        />
                        <Input
                            label='Prix unitaire'
                            type='text'
                            name='prixUnit'
                            onChange={handleChange}
                        />
                        <Input
                            label="Stock d'alerte"
                            type='text'
                            name='stockAlert'
                            onChange={handleChange}
                        />
                    </Dialogue>}
            </div>
            <TableData
                data={data}
                colomnsData={productsColumns}
            />

        </div>
    )
}

export default Produits