import React, { useState } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

import Button from '../Button';
import { useStateContext } from "../../context/ContextProvider";
import UpdateData from './UpdateData';
import { postData } from '../../hooks/useFetch';

const FormAdd = () => {
    const { panierApprov, updatePanierApprov, setPanierApprov, setAddData, setGetData } = useStateContext();
    const [isFormUpdate, setIsFormUpdate] = useState(false);
    const [productIndex, setProductIndex] = useState();

    const deleteProduct = (index) => {
        updatePanierApprov.splice(index, 1);
        setPanierApprov(updatePanierApprov);
    }

    const postApprov = () => {
        postData({
            codeAgence: 1,
            nomFournisseur: "ORDINAIRE",
            detail: panierApprov
        }, '/approvisionnement/add', null,
            setAddData(
                prevData => {
                    return {
                        ...prevData,
                        addApprov: {
                            designation: "",
                            pu: "",
                            qte: "",
                            lo: "",
                            dateExpiration: "---",
                        }
                    }
                }
            ));
        setGetData(true);
        console.log(panierApprov);
    };

    return (
        <div className='text-xs mt-2'>
            {panierApprov.map((produit, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-blue-gray-50'} p-2 border-b border-teal-900`}>
                    <div className='flex justify-between items-center'>
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
                                <p className='text-center uppercase'>{produit.qte}</p>
                            </div>
                            <div>
                                <p className='text-blue-gray-600'>P.U</p>
                                <p className='text-center uppercase'>{produit.pu}</p>
                            </div>
                            <div>
                                <p className='text-blue-gray-600'>LOT</p>
                                <p className='text-center uppercase'>{produit.lo}</p>
                            </div>
                            <div>
                                <p className='text-blue-gray-600'>DATE EXP.</p>
                                <p className='text-center uppercase'>{produit.dateExpiration}</p>
                            </div>
                        </div>
                        <div className='text-sm'>
                            <div className='text-green-900 shadow-xl'>
                                <Button
                                    icon={<AiFillEdit className='' />}
                                    label='Edit'
                                    onClick={() => { setIsFormUpdate(true); setProductIndex(index) }}
                                />
                            </div>
                            <div className='text-orange-700 '>
                                <Button
                                    icon={<MdDelete />}
                                    label='Delete'
                                    onClick={() => deleteProduct(index)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        {isFormUpdate && index === productIndex &&
                            <UpdateData
                                onClose={() => setIsFormUpdate(false)}
                                index={index}
                            />}
                    </div>
                </div>
            ))}
            <div className='flex justify-end my-5'>
                <Button
                    label='Terminer'
                    style='bg-teal-900 hover:bg-teal-800 text-white font-semibold p-3'
                    onClick={postApprov}
                />
            </div>
        </div>
    )
}

export default FormAdd