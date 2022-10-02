import React, { useState, useMemo } from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";

import Button from '../Button';
import { useStateContext } from "../../context/ContextProvider";
import { postData } from '../../hooks/useFetch';
import Input from '../Input';
import image2 from "../../assets/img/image2.jpg";

const FormAdd = () => {
    const { panierApprov, updatePanierApprov, setPanierApprov, setAddData, setGetData, boolingState, setBoolingState } = useStateContext();
    const [isFormUpdate, setIsFormUpdate] = useState(false);
    const [productIndex, setProductIndex] = useState();

    const handleChange = useMemo(() =>
        (e, index) => {
            upDateApprovProduct(index, { ...panierApprov[index], [e.target.name]: e.target.value });
        }, [{ ...panierApprov }]
    );

    const upDateApprovProduct = (index, value) => {
        updatePanierApprov.splice(index, 1, value);
        setPanierApprov(updatePanierApprov);
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
        }, '/approvisionnement/add', setBoolingState, {
            ...boolingState, registerSuccess: true
        },
            setAddData(
                prevData => {
                    return {
                        ...prevData,
                        addApprov: {
                            designation: "",
                            pu: "1",
                            qte: "1",
                            lo: "000",
                            dateExpiration: new Date().toISOString().slice(0, 10),
                        }
                    }
                }
            ));
        setGetData(true);
    };

    return (
        <div className='text-xs mt-10 ml-10'>
            {panierApprov.map((produit, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'bg-white' : ''} p-2 border-b border-teal-900`}>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between w-3/5'>
                            <div className='min-w-max flex gap-5 items-center'>
                                <div className='flex items-center'>
                                    <img src={image2} alt={produit.designation} className='h-16 w-16 rounded-md border border-gray-500 object-cover' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-base text-gray-700'>{produit.designation}</p>
                                        <div className='flex gap-2'>
                                            <p className='text-deep-orange-600 font-bold border-b border-deep-orange-600 text-[10px]'>Total: </p>
                                            <span className='text-white bg-red-400 rounded-full px-2  font-bold'>{parseFloat(produit.qte) * parseFloat(produit.pu)}</span>
                                        </div>
                                    </div>
                                    <div className='flex gap-2 text-green-600'>
                                        {
                                            index !== productIndex &&
                                            <div className='flex gap-2 text-sm text-gray-600'>

                                                <div className='text-center'>
                                                    <p className='text-xs'>Qte: <span className='border px-2 rounded-md text-sm'>{produit.qte}</span></p>
                                                </div>
                                                <div className='text-center'>
                                                    <p className='text-xs'>P.U: <span className='border px-2 rounded-md text-sm'>{produit.pu}</span></p>
                                                </div>
                                                <div className='text-center'>
                                                    <p className='text-xs'>Lot: <span className='border px-2 rounded-md text-sm'>{produit.lo}</span></p>
                                                </div>
                                                <div className='text-center'>
                                                    <p className='text-xs'>Exp: <span className='border px-2 rounded-md text-sm'>{produit.dateExpiration}</span></p>
                                                </div>

                                            </div>
                                        }
                                        {isFormUpdate && index === productIndex &&
                                            <div className='flex items-center gap-2'>
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

                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            {/* <div className='text-end'> */}
                            {/* <p className='text-sm text-green-800'>Tot: <span className='font-bold text-base'>{parseFloat(produit.qte) * parseFloat(produit.pu)}</span></p> */}
                            {/* </div> */}
                            <div className='flex flex-col text-sm gap-2'>
                                {index !== productIndex &&
                                    <div className='text-white text-lg bg-teal-800 py-1 px-2 rounded shadow-lg shadow-gray-500'>
                                        <Button
                                            icon={<MdModeEdit className='' />}
                                            onClick={() => {
                                                setIsFormUpdate(true);
                                                setProductIndex(index);
                                            }}
                                        />
                                    </div>
                                }
                                {isFormUpdate && index === productIndex &&
                                    <div className='text-white text-lg bg-green-900 py-1 px-2 rounded shadow-lg shadow-green-200'>
                                        <Button
                                            icon={<AiOutlineCheck className='' />}
                                            onClick={() => {
                                                setIsFormUpdate(false);
                                                setProductIndex();
                                            }}
                                        />
                                    </div>
                                }
                                <div className='text-red-500 text-lg bg-gray-300 py-1 px-2 rounded shadow-lg shadow-gray-500'>
                                    <Button
                                        icon={<MdDeleteOutline className='text-xl' />}
                                        onClick={() => deleteProduct(index)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex justify-end mt-5'>
                {
                    panierApprov.length > 0 &&
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