import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/Layout/NavBar';
import Add from './Components/purchases_components/Vendors_Components/Add';
import Show from './Components/purchases_components/Vendors_Components/Show';
import Update from './Components/purchases_components/Vendors_Components/Update';
import Delete from './Components/purchases_components/Vendors_Components/Delete';


function App() {
  return (
    <>
    
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/show' element={<Show/>}/>
          <Route path='/update/:userId' element={<Update/>}/>
          <Route path='/delete/:userId' element={<Delete/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
