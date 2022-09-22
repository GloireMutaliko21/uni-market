import React, { useRef } from 'react'
import Button from '../Button';
import Input from '../Input'
import Select from '../Select';

const FormAdd = () => {
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
                    onClick={() => { }}
                />
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