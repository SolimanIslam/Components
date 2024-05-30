import Table from "./Table";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable({ data, config, ...rest }) {

    const { setSortColumn, sortBy, sortOrder, sortedData } = useSort(data, config);

    const undatedConfig = config.map(column => {
        if (!column.sortValue) return column;
        return {
            ...column,
            header: () => {
                return <th className="flex items-center" onClick={() => { 
                    setSortColumn(column.label) }}>
                    {getIcons(sortBy, sortOrder, column.label)}
                    {column.label}
                </th>
            }
        }
    });


    return <Table
        data={sortedData}
        config={undatedConfig}
        {...rest}
    ></Table>

}
export default SortableTable;



const getIcons = (sortBy, sortOrder, label) => {
    if (label !== sortBy) {
        return <div>
            <GoChevronUp />
            <GoChevronDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <GoChevronUp />
        </div>
    }
    else if (sortOrder === 'desc') {
        return <div>
            <GoChevronDown />
        </div>
    }
    else if (sortOrder === null) {
        return <div>
            <GoChevronUp />
            <GoChevronDown />
        </div>
    }
};

