import React, { useRef, useState } from 'react'
import { FaRegHandPointRight } from "react-icons/fa";
import { FcHighPriority } from "react-icons/fc";
import { Alert } from '@material-tailwind/react';

import { getProduits } from '../../constants/api'
import { useStateContext } from "../../context/ContextProvider";

const Produits = () => {
    const searchRef = useRef();
    const [productAdded, setProductAdded] = useState(false)

    const { products, isFilter, handleChangeIsFilter, setPanierApprov, updatePanierApprov, addData } = useStateContext();
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
            updatePanierApprov.push({ ...addData.addApprov, designation: prod.designation });
            setPanierApprov(updatePanierApprov);
        } else {
            setProductAdded(true);
            setTimeout(() => {
                setProductAdded(false);
            }, 2000);
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
                    className={`border-x border-t border-teal-100 font-medium flex justify-between py-1 px-2 text-teal-800 hover:cursor-pointer`}
                    onClick={() => { addProduct(prod) }}
                >
                    <p className='capitalise font-light flex items-center'><FaRegHandPointRight className='mr-2 text-teal-200' />{prod.designation}</p>
                </div>
            )) : <div className='text-teal-600 font-light flex items-center justify-center'><FcHighPriority className='mr-4 text-lg' />Aucun produit</div>}
            <Alert
                show={productAdded}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
                className='bg-gray-50 w-max text-red-700 top-12 fixed'
            >
                Produit déjà ajouté
            </Alert>
        </div>
    )
}

export default Produits