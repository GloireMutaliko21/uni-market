import React, { useRef } from 'react'

import Button from '../Button';
import Input from '../Input'
import Select from '../Select';
import { useStateContext } from "../../context/ContextProvider";
import FormAddProduct from '../Products/FormAddProduct';
import FormAddCategProduct from '../Products/FormAddCategProduct';

const FormAdd = () => {
    const { boolingState, setBoolingState } = useStateContext();

    const quantiteRef = useRef();
    const prixUnit = useRef();
    const produitRef = useRef();
    return (
        <div>
            <div className='flex mb-3'>
                <Select
                    reference={produitRef}
                    label='Produit'
                    value=''
                    onChange={() => { }}
                    data={[]}
                />
                <Button
                    label='New'
                    style='hover:bg-teal-800 text-teal-900 hover:text-white border border-teal-900 px-3 text-md font-medium ml-5'
                    onClick={() => setBoolingState({ ...boolingState, addProductApprov: true })}
                />
                {boolingState.addProductApprov &&
                    <FormAddProduct
                        boolingState={boolingState.addProductApprov}
                        setBoolingState={setBoolingState}
                        value={{ ...boolingState, addProductApprov: true }}
                        cancel={{ ...boolingState, addProductApprov: false }}
                    />
                }
                {
                    boolingState.registerSuccess && <SuccessDialg />
                }
                {boolingState.formCategProduct &&
                    <FormAddCategProduct />
                }
            </div>
            <div className='text-blue-gray-600'>
                <Input
                    reference={quantiteRef}
                    label='Quantité'
                    type='number'
                    name=''
                    value=''
                    onChange={() => { }}
                />
                <Input
                    reference={prixUnit}
                    label='Prix Unitaire'
                    type='number'
                    name=''
                    value=''
                    onChange={() => { }}
                />
                <Input
                    reference={prixUnit}
                    label='Date Péremption'
                    type='date'
                    name=''
                    value=''
                    onChange={() => { }}
                />
            </div>
            <div className='flex mb-3'>
                <Select
                    reference={produitRef}
                    label='Fournisseur'
                    value=''
                    onChange={() => { }}
                    data={[]}
                />
                <Button
                    label='New'
                    style='hover:bg-teal-900 text-teal-900 hover:text-white border border-teal-900 px-3 text-md font-medium ml-5'
                    onClick={() => { }}
                />
            </div>
        </div>
    )
}

export default FormAdd