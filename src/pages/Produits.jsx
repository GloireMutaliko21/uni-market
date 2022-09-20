import React, { useMemo, useState } from 'react'
import { MdAdd } from "react-icons/md";

import { useStateContext } from "../context/ContextProvider";
import { getData, postData } from "../hooks/useFetch";
import { productsColumns } from "../data/tablesData";
import TableData from '../components/TableData';
import Button from '../components/Button';
import Dialogue from '../components/Dialogue';
import Input from '../components/Input';

const Produits = () => {
    const [addProduct, setAddProduct] = useState({
        designation: "",
        pu: "",
        qtealert: "",
        refAgence: 1
    });

    const {
        products, setProducts,
        showDialogProduct, setShowDialogProduct,
        categProducts, setCategProducts,
        setGetData
    } = useStateContext();

    const [data] = getData(
        products,
        setProducts,
        '/produit/find/1'
    );
    const [categProduits] = getData(
        categProducts,
        setCategProducts,
        '/categorie/find/1'
    );

    const handleChange = useMemo(() =>
        (e) => {
            if (e.target.name === "designation") {
                setAddProduct({ ...addProduct, designation: e.target.value })
            }
            if (e.target.name === "prixUnit") {
                setAddProduct({ ...addProduct, pu: e.target.value })
            }
            if (e.target.name === "stockAlert") {
                setAddProduct({ ...addProduct, qtealert: e.target.value })
            }
        }, [{ ...addProduct }]
    )

    const postProduct = () => {
        postData(addProduct, '/produit/add');
        setGetData(true);
    };

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
                        handleConfirm={postProduct}
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
                        <div className='grid'>
                            <label htmlFor='categories' className='font-bold text-sm'>Catégories</label>
                            <select
                                name="categories"
                                id=""
                                className='mt-3 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 appearance-none'
                            >
                                <option>--Selectionner une catégorie--</option>
                                {categProduits.map((option) =>
                                    <option
                                        key={option.code}
                                        value={option.code}
                                        className='capitalize'
                                    >
                                        {option.designation}
                                    </option>
                                )}
                            </select>
                        </div>
                    </Dialogue>}
            </div>
            <TableData
                data={products}
                colomnsData={productsColumns}
            />
        </div>
    )
}

export default Produits