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
import Select from '../components/Select';

const Produits = () => {
    const [validInfos, setValidInfos] = useState(true);
    const [validCategName, setValidCategName] = useState(true);

    const {
        products, setProducts,
        boolingState, setBoolingState,
        categProducts, setCategProducts,
        setGetData, addData, setAddData,
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
            if (e.target.type === 'text' || e.target.type === 'number') {
                setAddData(prevData => {
                    return {
                        ...prevData,
                        addProduct: {
                            ...prevData.addProduct,
                            [e.target.name]: e.target.value
                        }
                    }
                });
            }
            if (e.target.type === 'text') {
                handleBorderError(e, 3);
            }
            if (e.target.name === "designationCateg") {
                setAddData(prevData => {
                    return {
                        ...prevData,
                        addCategorie: {
                            ...prevData.addCategorie,
                            designation: e.target.value
                        }
                    }
                });
                validationCateg();
            }
            validation();
        }, [{ ...addData }]
    )

    const postProduct = () => {
        postData(addData.addProduct, '/produit/add', setBoolingState({
            ...boolingState, formProduct: false, registerSuccess: true
        }),
            setAddData(
                prevData => {
                    return {
                        ...prevData,
                        addProduct: {
                            designation: "",
                            pu: "",
                            qtealert: "",
                            unite: "",
                            codeCategorie: null,
                            refAgence: 1
                        }
                    }
                }
            ));
        setGetData(true);
    };

    const postCategorie = () => {
        postData(addData.addCategorie, '/categorie/add', setBoolingState({
            ...boolingState, formCategProduct: false, registerSuccess: true
        }),
            setAddData(
                prevData => {
                    return {
                        ...prevData,
                        addCategorie: {
                            designation: "",
                            refAgence: 1
                        }
                    }
                }
            ));
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
                                value={addData.addProduct.designation}
                                onChange={handleChange}
                            />
                            <Input
                                reference={prixUnitRef}
                                label='Prix unitaire'
                                type='number'
                                name='pu'
                                value={addData.addProduct.pu}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <Input
                                reference={stockAlertRef}
                                label="Stock d'alerte"
                                type='number'
                                name='qtealert'
                                value={addData.addProduct.qtealert}
                                onChange={handleChange}
                            />
                            <Input
                                reference={uniteRef}
                                label="Unité de mesure"
                                type='text'
                                name='unite'
                                value={addData.addProduct.unite}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex'>
                            <Select
                                reference={codeCategRef}
                                label='Categorie'
                                value={addData.addProduct.codeCategorie}
                                onChange={(e) => {
                                    validation();
                                    setAddData(prevData => {
                                        return {
                                            ...prevData,
                                            addProduct: {
                                                ...prevData.addProduct,
                                                codeCategorie: e.target.value
                                            }
                                        }
                                    });
                                }}
                                data={categProduits}
                            />
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
                            value={addData.addCategorie.designation}
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