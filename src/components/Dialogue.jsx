import React from 'react'
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button
} from "@material-tailwind/react";

const Dialogue = ({ children, title, label, handleConfirm, boolingState, setBoolingState, value, height, disabled }) => {

    return (
        <div className="">
            <Dialog
                open={boolingState}
                handler={() => setBoolingState(value)}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                className={`${height} overflow-scroll`}
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
                        onClick={() => setBoolingState(false)}
                        className="mr-1"
                    >
                        <span>Annuler</span>
                    </Button>
                    <Button className='bg-teal-900' onClick={handleConfirm} disabled={disabled}>
                        <span>{label}</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}

export default Dialogue