import { useState } from "react";

function useSort(data, config) {

    const [sortedCol, setSortedCol] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);

    const setSortColumn = (label) => {
        if (sortedCol !== label) {
            setSortOrder('asc');
            setSortedCol(label);
        }
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortedCol(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortedCol(label);
        }
        else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortedCol(label);
        }
    };


    let sortedData = data;
    if (sortedCol && sortOrder) {
        const { sortValue } = config.find(column => column.label === sortedCol);
        sortedData = SortingArrOfObjs(data, sortValue, sortOrder);

    }



    return {
        setSortColumn,
        sortedCol,
        sortOrder,
        sortedData
    };
}

export default useSort;


const SortingArrOfObjs = (arrOfObj, sortValue, sortOrder) => {
    return [...arrOfObj].sort((a, b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);
        const order = sortOrder.toLowerCase() === 'asc' ? 1 : -1;

        if (typeof valueA === 'string') {
            return valueA.localeCompare(valueB) * order;
        } else {
            return (valueA - valueB) * order;
        }
    })
}; 