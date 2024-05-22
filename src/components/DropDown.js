import { useState, useRef, useEffect } from "react";
import Panel from "./Panel";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";


function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef();

    const renderedComponent = options.map(option => {
        return <div
            className="hover:bg-sky-100 rounded cursor-pointer p-1"
            key={option.value}
            onClick={() => { handleOptionClicks(option) }}
        >
            {option.label}
        </div>
    });

    const openMenuClick = () => {
        setIsOpen((currentIsOpen) => {
            return !currentIsOpen;
        });
    };

    const handleOptionClicks = (option) => {
        console.log('menu click: ',performance.now());

        setIsOpen(false);
        onChange(option);
    };
    console.log('rerender: ',performance.now());
    useEffect(() => {
        const outsideDropMenuHandler = (event) => {
            console.log('document CLick: ' ,performance.now());

            if (!divEl.current.contains(event.target)) {
                console.log('outside');
                setIsOpen(false);
            } else {
                console.log('inside');
              }
        };

        document.addEventListener('click', outsideDropMenuHandler, true);

        return () => { document.removeEventListener('click', outsideDropMenuHandler , true) };
    }, []);

    





    const icon = <div>{isOpen ? <GoChevronDown /> : <GoChevronLeft />}</div>;
    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={openMenuClick}>
                {value?.label || 'Select ...'}
                {icon}
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedComponent}</Panel>}
        </div>

    );
}

export default DropDown;


