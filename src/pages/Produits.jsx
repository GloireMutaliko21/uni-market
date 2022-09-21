import React, { useMemo, useState, useRef } from 'react'
import { MdAdd } from "react-icons/md";

import { useStateContext } from "../context/ContextProvider";
import { getData, postData } from "../hooks/useFetch";
import { productsColumns } from "../data/tablesData";
import TableData from '../components/TableData';
import Button from '../components/Button';
import Dialogue from '../components/Dialogue';
import Input from '../components/Input';
import SuccessDialg from '../components/SuccessDialg';

const Produits = () => {
    const [addProduct, setAddProduct] = useState({
        designation: "",
        pu: "",
        qtealert: "",
        unite: "",
        codeCategorie: null,
        refAgence: 1
    });

    const [addCategorie, setAddCategorie] = useState({
        designation: "",
        refAgence: 1
    })
    const [validInfos, setValidInfos] = useState(true);
    const [validCategName, setValidCategName] = useState(true);

    const {
        products, setProducts,
        boolingState, setBoolingState,
        categProducts, setCategProducts,
        setGetData,
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

    const handleBorderError = (e, value) => {
        e.target.value.trim().length < value ?
            e.target.classList.add('border-red-900') :
            e.target.classList.remove('border-red-900');
    };

    const handleChange = useMemo(() =>
        (e) => {
            if (e.target.name === "designation") {
                setAddProduct({ ...addProduct, designation: e.target.value.trim() });
                handleBorderError(e, 3);
            }
            if (e.target.name === "prixUnit") {
                setAddProduct({ ...addProduct, pu: e.target.value });
            }
            if (e.target.name === "stockAlert") {
                setAddProduct({ ...addProduct, qtealert: e.target.value });
            }
            if (e.target.name === "unite") {
                setAddProduct({ ...addProduct, unite: e.target.value.trim() });
                handleBorderError(e, 3);
            }
            if (e.target.name === "designationCateg") {
                setAddCategorie({ ...addCategorie, designation: e.target.value.trim() });
                handleBorderError(e, 3);
                validationCateg();
            }
            validation();
        }, [{ ...addProduct }, { ...addCategorie }]
    )

    const postProduct = () => {
        postData(addProduct, '/produit/add', setBoolingState({
            ...boolingState, formProduct: false, registerSuccess: true
        }),
            setAddProduct({
                designation: "",
                pu: "",
                qtealert: "",
                unite: "",
                codeCategorie: null,
                refAgence: 1
            }));
        setGetData(true);
    };
    const postCategorie = () => {
        postData(addCategorie, '/categorie/add', setBoolingState({
            ...boolingState, formCategProduct: false, registerSuccess: true
        }),
            setAddCategorie({
                designation: "",
                refAgence: 1
            }));
        setGetData(true);
    };

    const designationRef = useRef();
    const prixUnitRef = useRef();
    const stockAlertRef = useRef();
    const uniteRef = useRef();
    const codeCategRef = useRef();
    const designationCategRef = useRef();

    const validation = () => {
        designationRef.current.value.trim().length > 2 &&
            prixUnitRef.current.value > 0 &&
            stockAlertRef.current.value.length > 0 &&
            uniteRef.current.value.trim().length > 2 &&
            codeCategRef.current.value.length > 0
            ? setValidInfos(false) : setValidInfos(true)
    }

    const validationCateg = () => {
        designationCategRef.current.value.trim().length > 2 ?
            setValidCategName(false) :
            setValidCategName(true);
    };

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
                    <Dialogue
                        boolingState={boolingState.formProduct}
                        setBoolingState={setBoolingState}
                        value={{ ...boolingState, formProduct: true }}
                        label='Envoyer'
                        handleConfirm={postProduct}
                        title='Ajouter Produit'
                        disabled={validInfos}
                        cancel={{ ...boolingState, formProduct: false }}
                    >
                        <div className='grid md:grid-cols-2 gap-4'>
                            <Input
                                reference={designationRef}
                                label='Designation'
                                type='text'
                                name='designation'
                                value={addProduct.designation}
                                onChange={handleChange}
                            />
                            <Input
                                reference={prixUnitRef}
                                label='Prix unitaire'
                                type='number'
                                name='prixUnit'
                                value={addProduct.pu}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <Input
                                reference={stockAlertRef}
                                label="Stock d'alerte"
                                type='number'
                                name='stockAlert'
                                value={addProduct.qtealert}
                                onChange={handleChange}
                            />
                            <Input
                                reference={uniteRef}
                                label="Unité de mesure"
                                type='text'
                                name='unite'
                                value={addProduct.unite}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex'>
                            <select
                                ref={codeCategRef}
                                value={`${addProduct.codeCategorie}`}
                                onChange={(e) => {
                                    validation();
                                    setAddProduct({ ...addProduct, codeCategorie: e.target.value });
                                }}
                                className="w-full text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block"
                            >
                                <option value="">Selectionner Catégorie</option>
                                {categProduits.map((option) =>
                                    <option
                                        key={option.code}
                                        value={`${option.code}`}
                                        className='capitalize'
                                    >
                                        {option.designation}
                                    </option>
                                )}
                            </select>
                            <Button
                                icon={<MdAdd />}
                                style='bg-teal-900 hover:bg-teal-800 text-white p-2 text-2xl font-bold ml-5'
                                onClick={() => setBoolingState({ ...boolingState, formCategProduct: true })}
                            />
                        </div>
                    </Dialogue>}
                {
                    boolingState.registerSuccess && <SuccessDialg />
                }
                {boolingState.formCategProduct &&
                    <Dialogue
                        boolingState={boolingState.formCategProduct}
                        setBoolingState={setBoolingState}
                        value={{ ...boolingState, formCategProduct: false }}
                        label='Envoyer'
                        handleConfirm={postCategorie}
                        title='Ajouter Catégorie'
                        disabled={validCategName}
                        cancel={{ ...boolingState, formCategProduct: false }}
                    >
                        <Input
                            reference={designationCategRef}
                            label='Designation'
                            type='text'
                            name='designationCateg'
                            value={addCategorie.designation}
                            onChange={handleChange}
                        />
                    </Dialogue>
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