import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
const labelStyling = 'flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer';
const contentStyling = 'border-b p-5';
const renderedCompStyling = 'border-x border-t rounded';



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
        className={labelStyling}
        onClick={() => { toggleContent(index); }}>{item.label}
        {icon}
      </div>


      {expanded &&
        <div className={contentStyling}>
          {item.content}
        </div>}

    </div>
  });
  return (
    <div className={renderedCompStyling}>
      {renderedComponent}
    </div>
  );
}

export default Accordion;

