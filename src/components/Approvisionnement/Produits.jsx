import React, { useRef } from 'react'
import { MdAddCircle } from "react-icons/md";

import { getProduits } from '../../constants/api'
import { useStateContext } from "../../context/ContextProvider";
import Input from '../Input';

const Produits = () => {
    const searchRef = useRef();

    const { products, isFilter, handleChangeIsFilter } = useStateContext();
    const productsData = [];
    const recherche = (condition, datas) => {
        if (condition) {
            return;
        } else {
            productsData.splice()
            productsData.push(datas)
        }
    };

    products.forEach(element => {
        const searchData = element.designation.toLowerCase().indexOf(isFilter.toLowerCase()) === -1;
        recherche(searchData, element);
    });

    getProduits();
    return (
        <div>
            <Input
                reference={searchRef}
                type='text'
                name=''
                value={isFilter}
                onChange={(e) => { handleChangeIsFilter(e) }}
            />
            {productsData.map((prod, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'bg-teal-200' : 'border border-teal-100 text-teal-300 font-medium'} flex justify-between py-1 px-2 text-titleColor hover:cursor-pointer`}>
                    <p className='uppercase'>{prod.designation}</p>
                    <p>
                        <MdAddCircle className='text-lg ml-5' />
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Produits