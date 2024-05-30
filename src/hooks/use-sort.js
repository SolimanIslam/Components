import { useState } from "react";

function useSort(data, config) {

    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);

   

    const setSortColumn = (label) => {
        if (sortBy && label !== sortBy) {
          setSortOrder('asc');
          setSortBy(label);
          
          return;
        }
    
        if (sortOrder === null) {
          setSortOrder('asc');
          setSortBy(label);
                   
        } else if (sortOrder === 'asc') {
          setSortOrder('desc');
          setSortBy(label);
          
        } else if (sortOrder === 'desc') {
          setSortOrder(null);
          setSortBy(null);
               }
      };


    let sortedData = data;
    if (sortBy && sortOrder) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        sortedData = SortingArrOfObjs(data, sortValue, sortOrder);

    }



    return {
        setSortColumn,
        sortBy,
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