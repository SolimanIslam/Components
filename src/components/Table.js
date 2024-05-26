import { Fragment } from "react";


function Table({ keyFn, config, data }) {

    const renderedHeader = config.map(column => {

        return column.header ?
            <Fragment key={column.label}>{column.header()}</Fragment> :
            <th key={column.label}>{column.label}</th>
    });

    const renderedRows = data.map(row => {
        const renderedCells = config.map(column => {
            return <td className="p-2" key={column.label}>{column.render(row)}</td>
        });

        return <tr className="border-b" key={keyFn(row)}>
            {renderedCells}
        </tr>
    });
    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeader}
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>
}

export default Table;

// function Table({rowsData, columnsConfig, rowKeyFn}){

//     const renderedHeader = columnsConfig.map(column => {
//         return column.header ? <Fragment key={column.label}>{column.header()}</Fragment> : <th key={column.label}>{column.label}</th>;
//     });

//     const renderedRows = rowsData.map(row =>{

//         const renderedCells = columnsConfig.map( column => {
//             // return of each cell in a given row
//             return <td className="p-2" key={column.label}>{column.render(row)}</td>
//         }

//         );
//         // return of the rows
//         return <tr className="border-b" key={rowKeyFn(row)}>{renderedCells}</tr> 
//     }
//     );


//     return <table className="table-auto border-spacing-2">
//         <thead>
//             <tr className="border-b-2">{renderedHeader}</tr>
//         </thead>
//         <tbody>{renderedRows}</tbody>
//     </table>
// }

// export default Table;