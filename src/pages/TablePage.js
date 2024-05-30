import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {

const data = [
    { name: 'Lime', color: 'bg-green-500', score: 4 },
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Cherry', color: 'bg-red-700', score: 2.5 },
];

    const config = [
        {
            label: "name",
            render: (row) => row.name,
            sortValue: (row) => row.name
        },
        {
            label: "color",
            render: (row) => <div className={`p-3 m-5 ${row.color}`}></div>
        },
        {
            label: "score",
            render: (row) => row.score,
            sortValue: (row) => row.score
        }
    ];

    const keyFn = (row) => {
        return row.name;
    }

    return <div>
        {/* <Table
            data={data}
            config={config}
            keyFn={keyFn}
        /> */}

        <SortableTable
            data={data}
            config={config}
            keyFn={keyFn}
        />
    </div>
}

export default TablePage;

