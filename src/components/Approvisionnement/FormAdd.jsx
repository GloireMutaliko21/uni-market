import React, { useState, useMemo } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

import Button from '../Button';
import { useStateContext } from "../../context/ContextProvider";
import UpdateData from './UpdateData';
import { postData } from '../../hooks/useFetch';
import Input from '../Input';

const FormAdd = () => {
    const { panierApprov, updatePanierApprov, setPanierApprov, setAddData, setGetData } = useStateContext();
    const [isFormUpdate, setIsFormUpdate] = useState(false);
    const [productIndex, setProductIndex] = useState();

    const [newData, setNewData] = useState({
        qte: "",
        pu: "",
        lo: "",
        dateExpiration: ""
    });

    const handleChange = useMemo(() =>
        (e, index) => {

            setNewData(prevData => {
                return {
                    ...prevData,
                    [e.target.name]: e.target.value
                }
            });
            upDateApprovProduct(index, { ...panierApprov[index], [e.target.name]: e.target.value });
            // console.log(newData);
        }, [{ ...newData }]
    );

    const upDateApprovProduct = (index, value) => {
        updatePanierApprov.splice(index, 1, value);
        setPanierApprov(updatePanierApprov);
        setNewData({
            qte: "", pu: "", lo: "", dateExpiration: ""
        })
    };

    const deleteProduct = (index) => {
        updatePanierApprov.splice(index, 1);
        setPanierApprov(updatePanierApprov);
    };

    const postApprov = () => {
        postData({
            codeAgence: 1,
            nomFournisseur: "ORDINAIRE",
            detail: JSON.stringify(panierApprov)
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
                            {
                                index !== productIndex &&
                                <div className='ml-10 flex gap-2'>
                                    <div>
                                        <p className='text-blue-gray-600'>QTE</p>
                                        <p className='text-center uppercase w-20'>{produit.qte}</p>
                                    </div>
                                    <div>
                                        <p className='text-blue-gray-600'>P.U</p>
                                        <p className='text-center uppercase w-20'>{produit.pu}</p>
                                    </div>
                                    <div>
                                        <p className='text-blue-gray-600'>LOT</p>
                                        <p className='text-center uppercase w-20'>{produit.lo}</p>
                                    </div>
                                    <div>
                                        <p className='text-blue-gray-600'>DATE EXP.</p>
                                        <p className='text-center uppercase w-20'>{produit.dateExpiration}</p>
                                    </div>

                                </div>
                            }
                            {isFormUpdate && index === productIndex &&
                                <div className='ml-10 flex items-center gap-2'>
                                    <div>
                                        <p className='text-blue-gray-600'>QTE</p>
                                        <Input
                                            placeholder='Quantité'
                                            type='number'
                                            name='qte'
                                            style='w-20 px-1 py-0'
                                            value={produit.qte}
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                    </div>
                                    <div>
                                        <p className='text-blue-gray-600'>P.U</p>
                                        <Input
                                            placeholder='Prix Unit'
                                            type='number'
                                            name='pu'
                                            style='w-20 px-1 py-0'
                                            value={produit.pu}
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                    </div>
                                    <div>
                                        <p className='text-blue-gray-600'>LOT</p>
                                        <Input
                                            placeholder='N° du lot'
                                            type='number'
                                            name='lo'
                                            style='w-20 px-1 py-0 mt-0 mb-0'
                                            value={produit.lo}
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                    </div>
                                    <div>
                                        <p className='text-blue-gray-600'>DATE EXP.</p>
                                        <Input
                                            placeholder='Date Exp'
                                            type='date'
                                            name='dateExpiration'
                                            style='w-full px-1 py-0'
                                            value={produit.dateExpiration}
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                    </div>
                                    <div className='bg-green-700 text-white py-1 px-2 rounded-full'>
                                        <Button
                                            label='Valider'
                                            onClick={() => {
                                                // upDateApprovProduct(index, { ...panierApprov[index], ...newData });
                                                setIsFormUpdate(false);
                                                setProductIndex();
                                            }}
                                        />
                                    </div>
                                </div>
                            }
                        </div>
                        <div className='text-sm'>
                            <div className='text-green-900 shadow-xl'>
                                <Button
                                    icon={<AiFillEdit className='' />}
                                    label='Edit'
                                    onClick={() => {
                                        setIsFormUpdate(true);
                                        setProductIndex(index);
                                    }}
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
                    {/* <div className='flex justify-around'>
                        {isFormUpdate && index === productIndex &&
                            <UpdateData
                                onClose={() => setIsFormUpdate(false)}
                                index={index}
                            />}
                    </div> */}
                </div>
            ))}
            <div className='flex justify-end my-5'>
                {panierApprov.length > 0 &&
                    <Button
                        label='Terminer'
                        style='bg-teal-900 hover:bg-teal-800 text-white font-semibold p-3'
                        onClick={postApprov}
                    />
                }
            </div>
        </div>
    )
}

export default FormAdd