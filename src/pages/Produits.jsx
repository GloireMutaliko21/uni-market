import React from 'react'
import { ColumnDirective, GridComponent, Inject, Sort, Page, Selection, Edit, Filter, Toolbar, ColumnsDirective } from "@syncfusion/ej2-react-grids";

import { useStateContext } from "../context/ContextProvider";
import { getData } from "../hooks/useFetch";
import { productsColumns } from "../data/tablesData";

const Produits = () => {
    const { token, setToken, products, setProducts } = useStateContext();
    const [data] = getData(
        products,
        setProducts,
        '/produit/find/2'
    )
    console.log();
    return (
        <div className=''>
            <h2 className='text-3xl font-black'>Produits</h2>
            {data.map((product) =>
                <div key={product.code}>
                    {product.code}////
                    {product.designation}
                    <div>{product.pu}</div>
                    <div>{product.qtealert}</div>
                </div>
            )}
            <GridComponent
                dataSource={data}
                allowPaging
                allowSorting
                toolbar={['Search', 'Delete']}
                editSettings={{ allowDeleting: true, allowEditing: true }}
            >
                <ColumnsDirective>
                    {productsColumns.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Sort, Page, Selection, Edit, Filter, Toolbar]} />
            </GridComponent>
        </div>
    )
}

export default Produits