import { Alert } from "@material-tailwind/react";

import { useStateContext } from "../context/ContextProvider";

const Alerte = ({ children }) => {
    const { showAlert, setShowAlert, boolingState, setBoolingState } = useStateContext();

    return (
        <div>
            <Alert
                show={boolingState.showAlert}
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 100 },
                }}
                dismissible={{
                    onClose: () => setBoolingState({ ...boolingState, showAlert: false }),
                }}
                className='bg-teal-500 top-12 right-5 absolute w-96 max-w-max'
            >
                {children}
            </Alert>
        </div>
    );
}

export default Alerte;