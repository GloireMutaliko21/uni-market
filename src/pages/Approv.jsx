import React from 'react'
import FormAdd from '../components/Approvisionnement/FormAdd';
import Produits from '../components/Approvisionnement/Produits';
import { useStateContext } from '../context/ContextProvider';
import SuccessDialg from '../components/SuccessDialg';

const Approv = () => {
    const { boolingState } = useStateContext()
    return (
        <div className='px-2'>
            <h2 className='text-3xl font-black mx-10'>Approvisionnement</h2>
            <div className='w-full grid md:grid-cols-[3fr_1fr] gap-3'>
                <FormAdd />
                <Produits />
            </div>
            {
                boolingState.registerSuccess && <SuccessDialg />
            }
        </div>
    )
}

export default Approv