import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleContent = (index) => {
    setExpandedIndex((currentExpandedIndex)=>{
      return currentExpandedIndex === index? -1 : index;
    });
  };


  const renderedComponent = items.map((item, index) => {
    const expanded = expandedIndex === index;
    const icon = (<span className='text-2xl'>{expanded ? <GoChevronDown /> : <GoChevronLeft />}</span>);

    return <div key={item.id}>

      <div
        className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
        onClick={() => { toggleContent(index); }}>{item.label}
        {icon}
      </div>


      {expanded &&
        <div className="border-b p-5">
          {item.content}
        </div>}

    </div>
  });
  return (
    <div className="border-x border-t rounded">
      {renderedComponent}
    </div>
  );
}

export default Accordion;

