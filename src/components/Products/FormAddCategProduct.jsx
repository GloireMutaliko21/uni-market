import React, { useState, useMemo, useRef } from 'react';

import { useStateContext } from "../../context/ContextProvider";
import { getData, postData } from "../../hooks/useFetch";
import Dialogue from '../Dialogue';
import Input from '../Input';

const FormAddCategProduct = () => {
    const [validCategName, setValidCategName] = useState(true);
    const designationCategRef = useRef();

    const {
        products, setProducts,
        boolingState, setBoolingState,
        categProducts, setCategProducts,
        setGetData, addData, setAddData,
    } = useStateContext();

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

    const handleBorderError = (e, value) => {
        e.target.value.trim().length < value ?
            e.target.classList.add('border-red-900') :
            e.target.classList.remove('border-red-900');
    };
    const validationCateg = () => {
        designationCategRef.current.value.trim().length > 2 ?
            setValidCategName(false) :
            setValidCategName(true);
    };

    const handleChange = useMemo(() =>
        (e) => {
            handleBorderError(e, 3);
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
        }, [{ ...addData }]
    );

    return (
        <>
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
                    style='w-full'
                    name='designationCateg'
                    value={addData.addCategorie.designation}
                    onChange={handleChange}
                />
            </Dialogue>
        </>
    )
}

export default FormAddCategProduct