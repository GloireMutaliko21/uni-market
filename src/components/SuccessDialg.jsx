import React from 'react'
import { Dialog, DialogBody } from '@material-tailwind/react';
import { FcApproval } from "react-icons/fc";

import { useStateContext } from "../context/ContextProvider";

const SuccessDialg = () => {
    const { boolingState, setBoolingState } = useStateContext();

    const handleOpen = () => {
        setBoolingState({ ...boolingState, registerSuccess: false });
    };

    return (
        <Dialog
            open={boolingState.registerSuccess}
            handler={handleOpen}
        >
            <DialogBody className='flex items-center'>
                <FcApproval className='text-7xl' />
                <span className='text-2xl ml-7 font-bold text-blue-gray-800'>Enregistrement réussi !</span>
            </DialogBody>
        </Dialog>
    )
}

export default SuccessDialg