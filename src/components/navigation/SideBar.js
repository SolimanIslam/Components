import Link from "./Link";


function SideBar() {
    const paths = [
        { label: 'DropDown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'ButtonPage', path: '/buttons' } ,
        { label: 'ModalPage', path: '/modal' }
    ];

    const renderedComponents = paths.map((pathItem) => {
        return <Link
            key={pathItem.label}
            path={pathItem.path}
            className="mb-3"
        >
            {pathItem.label}
        </Link>
    });

    return <div
        className="sticky top-0 overflow-y-scroll flex flex-col items-start ">
        {renderedComponents}
    </div>
}

export default SideBar;