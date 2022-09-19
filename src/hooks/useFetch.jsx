import { useEffect } from "react";
import { endPoint } from "../constants/api";

export function getData(data, setData, token, url) {
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        (async function () {
            const dataParams = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            };
            try {
                const response = await fetch(`${endPoint}/${url}`, dataParams, { signal });
                const responseData = await response.json();
                if (response.status === 200) {
                    console.log(responseData.response);
                    setData(responseData);
                }
            } catch (error) {
                console.log(error);
            }
        })();
        return () => {
            controller.abort();
        }
    }, [data]);
    return [data];
}