import { useEffect } from "react";
import { endPoint } from "../constants/api";
import { useStateContext } from "../context/ContextProvider";

export function getData(data, setData, url) {
    const { token } = useStateContext();
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        (async function () {
            const dataParams = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            };
            try {
                const response = await fetch(`${endPoint}${url}`, dataParams, { signal });
                const responseData = await response.json();
                if (response.status === 200) {
                    console.log(responseData.response);
                    setData(responseData.response);
                }
            } catch (error) {
                console.log(error);
            }
        })();
        return () => {
            controller.abort();
        }
    }, []);
    return [data];
}