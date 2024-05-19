import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
  
  const [selected, setSelected] = useState(null);
  const handleSelected = (option) =>{
    setSelected(option);
    console.log('updated');
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];


  return (
    <div>
      <DropDown options={options} value={selected} onChange={handleSelected}/>
    </div>

  );
}

export default App;


