import React from 'react'
import { ColumnDirective, GridComponent, Inject, Sort, Page, Selection, Edit, Filter, Toolbar, ColumnsDirective } from "@syncfusion/ej2-react-grids";


const TableData = ({ data, colomnsData }) => {
    return (
        <div className='mx-16 my-8'>
            <GridComponent
                dataSource={data}
                allowPaging
                allowSorting
                toolbar={['Search', 'Delete']}
                editSettings={{ allowDeleting: true, allowEditing: true }}
            >
                <ColumnsDirective>
                    {colomnsData.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Sort, Page, Selection, Edit, Filter, Toolbar]} />
            </GridComponent>
        </div>
    )
}

export default TableData