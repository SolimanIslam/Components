import SideBar from './components/navigation/SideBar';
import Route from './components/navigation/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropDownPage';
import ButtonPage from './pages/ButtonPage';

function App() {
 
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
    <SideBar />

    <div className="col-span-5">
      <Route displayPath='/'>
      <DropdownPage />
    </Route>

    <Route displayPath='/Accordion'>
      <AccordionPage />
    </Route>

    <Route displayPath='Buttons'>
      <ButtonPage />
    </Route>

    </div>

    
    </div>

  );
}

export default App;


