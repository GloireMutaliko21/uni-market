import React from 'react'
import { MdAddCircle } from "react-icons/md";

import { getProduits } from '../../constants/api'
import { useStateContext } from "../../context/ContextProvider";

const Produits = () => {
    const { products } = useStateContext();

    getProduits();
    return (
        <div>
            {products.map((prod, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'bg-teal-100' : 'border border-teal-100 text-teal-300 font-medium'} flex justify-between py-1 px-2 text-titleColor hover:cursor-pointer`}>
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