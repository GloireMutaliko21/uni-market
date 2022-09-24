import React, { useRef } from 'react'
import { MdAddCircle, MdOutlineWarning } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";

import { getProduits } from '../../constants/api'
import { useStateContext } from "../../context/ContextProvider";

const Produits = () => {
    const searchRef = useRef();

    const { products, isFilter, handleChangeIsFilter, setPanierApprov, updatePanierApprov } = useStateContext();
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

    const addProduct = (prod) => {
        if (!updatePanierApprov.find(produit => produit.designation === prod.designation)) {
            updatePanierApprov.push(prod);
            setPanierApprov(updatePanierApprov);
        }
    };

    getProduits();

    return (
        <div className=''>
            <input
                ref={searchRef}
                className="w-full text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-4 my-2 block appearance-none"
                type='text'
                name=''
                placeholder='Rechercher'
                value={isFilter}
                onChange={(e) => { handleChangeIsFilter(e) }}
            >
            </input>
            {productsData.length > 0 ? productsData.map((prod, index) => (
                <div
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-teal-200' : 'border border-teal-100 text-teal-300 font-medium'} flex justify-between py-1 px-2 text-titleColor hover:cursor-pointer`}
                    onClick={() => { addProduct(prod) }}
                >
                    <p className='uppercase'>{prod.designation}</p>
                    <p>
                        <MdAddCircle className='text-lg ml-5' />
                    </p>
                </div>
            )) : <div className='text-teal-600 font-light flex items-center justify-center'><FcHighPriority className='mr-4 text-lg' />Aucun produit</div>}
        </div>
    )
}

export default Produits