import React, { useRef } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

import Button from '../Button';
import Input from '../Input'
import Select from '../Select';
import { useStateContext } from "../../context/ContextProvider";
import FormAddProduct from '../Products/FormAddProduct';
import FormAddCategProduct from '../Products/FormAddCategProduct';
import SuccessDialg from '../SuccessDialg';
import { getData } from '../../hooks/useFetch';
import { getProduits } from '../../constants/api';

const FormAdd = () => {
    const { boolingState, setBoolingState, products, panierApprov } = useStateContext();



    const quantiteRef = useRef();
    const prixUnit = useRef();
    const dateExpRef = useRef();
    const dateApprovRef = useRef();
    const produitRef = useRef();

    getProduits();

    return (
        <div className=''>
            {panierApprov.map((produit, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-blue-gray-50'} flex justify-between items-center p-2 border-b border-teal-900`}>
                    <div>
                        <p className='px-2 text-blue-gray-600'>N°</p>
                        <p className='px-2 mt-1 bg-teal-900 text-white text-center'>{index + 1}</p>
                    </div>
                    <div className='flex justify-between w-3/5'>
                        <div>
                            <p className='text-blue-gray-600'>DESIGNATION</p>
                            <p className='text-center uppercase'>{produit.designation}</p>
                        </div>
                        <div>
                            <p className='text-blue-gray-600'>QTE</p>
                            <p className='text-center uppercase'>1.0</p>
                        </div>
                        <div>
                            <p className='text-blue-gray-600'>P.U</p>
                            <p className='text-center uppercase'>1.0</p>
                        </div>
                        <div>
                            <p className='text-blue-gray-600'>LOT</p>
                            <p className='text-center uppercase'>1.0</p>
                        </div>
                        <div>
                            <p className='text-blue-gray-600'>DATE EXP.</p>
                            <p className='text-center uppercase'>1.0</p>
                        </div>
                    </div>
                    <div>
                        <Button
                            icon={<AiFillEdit />}
                            label='Edit'
                        />
                        <Button
                            icon={<MdDelete />}
                            label='Delete'
                        />
                    </div>
                </div>
            ))}
            {/* <div className='flex mb-3'>
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
            <div className='flex mb-3'>
                <Select
                    reference={produitRef}
                    label='Produit'
                    value=''
                    onChange={() => { }}
                    data={products}
                />
                <Button
                    label='New'
                    style='hover:bg-teal-800 text-teal-900 hover:text-white border border-teal-900 px-3 text-md font-medium ml-5'
                    onClick={() => setBoolingState({ ...boolingState, addProductApprov: true })}
                />
                {boolingState.addProductApprov &&
                    <FormAddProduct
                        booleanState={boolingState.addProductApprov}
                        setBooleanState={setBoolingState}
                        value={{ ...boolingState, addProductApprov: true }}
                        cancel={{ ...boolingState, addProductApprov: false }}
                        categValue={{ ...boolingState, formCategProduct: true }}
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
                    reference={dateApprovRef}
                    label='Date Achat'
                    type='date'
                    name=''
                    value=''
                    onChange={() => { }}
                />
                <Input
                    reference={dateExpRef}
                    label='Date Péremption'
                    type='date'
                    name=''
                    value=''
                    onChange={() => { }}
                />
            </div> */}
        </div>
    )
}

export default FormAdd