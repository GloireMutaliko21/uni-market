import React, { useMemo, useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";

import Button from '../Button'
import { useStateContext } from "../../context/ContextProvider";
import Input from '../Input';

const UpdateData = ({ onClose, index }) => {
    const { updatePanierApprov, addData, setPanierApprov, panierApprov } = useStateContext();
    const [newData, setNewData] = useState({
        qte: "",
        pu: "",
        lo: "",
        dateExpiration: ""
    });

    // const Input = ({ type, onChange, value, placehoder, name }) => {
    //     return (
    //         <input
    //             type={type}
    //             onChange={onChange}
    //             value={value}
    //             placeholder={placehoder}
    //             className="w-full text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-2 mr-2 block appearance-none"
    //             name={name}
    //         >
    //         </input>
    //     )
    // };

    const handleChange = useMemo(() =>
        (e) => {

            setNewData(prevData => {
                return {
                    ...prevData,
                    [e.target.name]: e.target.value
                }
            });
            console.log(newData);
        }, [{ ...newData }]
    );

    const upDateApprovProduct = (index, value) => {
        updatePanierApprov.splice(index, 1, value);
        setPanierApprov(updatePanierApprov);
    };

    return (
        <div className='flex justify-between items-center'>
            <Input
                placeholder='Quantité'
                type='number'
                name='qte'
                style='w-full px-1 py-0'
                value={newData.qte}
                onChange={handleChange}
            />
            <Input
                placehoder='Prix Unitaire'
                type='number'
                name='pu'
                style='w-full'
                value={newData.pu}
                onChange={handleChange}
            />
            <Input
                placehoder='N° du lot'
                type='text'
                name='lo'
                style='w-full'
                value={newData.lo}
                onChange={handleChange}
            />
            <Input
                placehoder='Date Exp.'
                type='date'
                name='dateExpiration'
                value={newData.dateExpiration}
                onChange={handleChange}
            />
            <div className='flex justify-around w-96'>
                <Button
                    label='Valider'
                    style='text-green-800 hover:underline'
                    onClick={() => { upDateApprovProduct(index, { ...panierApprov[index], ...newData }) }}
                />
                <Button
                    icon={<TiDeleteOutline className='text-2xl text-red-700' />}
                    onClick={onClose}
                />
            </div>
        </div>
    )
}

export default UpdateData