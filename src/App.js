import SideBar from './components/navigation/SideBar';
import Route from './components/navigation/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropDownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';

function App() {
 
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
    <SideBar />

    <div className="col-span-5">
      <Route displayPath='/'>
      <DropdownPage />
    </Route>

    <Route displayPath='/accordion'>
      <AccordionPage />
    </Route>

    <Route displayPath='/buttons'>
      <ButtonPage />
    </Route>

    <Route displayPath='/modal'>
      <ModalPage />
    </Route>

    <Route displayPath='/table'>
      <TablePage />
    </Route>

    </div>

    
    </div>

  );
}

export default App;


