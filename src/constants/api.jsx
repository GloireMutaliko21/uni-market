export const endPoint = 'http://78.138.45.224:3002/api/v1';
import { getData } from '../hooks/useFetch';
import { useStateContext } from "../context/ContextProvider";

export const getProduits = () => {
    const { products, setProducts } = useStateContext();
    const [data] = getData(
        products, setProducts, '/produit/find/1'
    );
};