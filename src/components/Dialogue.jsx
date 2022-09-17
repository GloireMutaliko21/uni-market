import React from 'react'
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button
} from "@material-tailwind/react";

import { useStateContext } from "../context/ContextProvider";
import Input from './Input';

const Dialogue = ({ children, title, label, handleConfirm }) => {
    const { showDialog, setShowDialog } = useStateContext();

    return (
        <div className="fixed z-50">
            <Dialog
                open={showDialog}
                handler={() => setShowDialog(false)}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}

            >
                <DialogHeader className='text-teal-800'>{title}</DialogHeader>
                <DialogBody divider>
                    <div className='w-full'>
                        {children}
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => setShowDialog(false)}
                        className="mr-1"
                    >
                        <span>Annuler</span>
                    </Button>
                    <Button className='bg-teal-900' onClick={handleConfirm}>
                        <span>{label}</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}

export default Dialogue