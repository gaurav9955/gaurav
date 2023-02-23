import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/Layout/NavBar';


function App() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
