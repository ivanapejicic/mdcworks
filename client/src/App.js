import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './assets/pages/Login/Login';
import Home from './assets/pages/Home/Home';
import Admin from './assets/pages/Admin/Admin';
import AI from './assets/pages/AI/AI';
import CyberSecurity from './assets/pages/CyberSecurity/CyberSecurity';
import DataAnalyst from './assets/pages/DataAnalyst/DataAnalyst';
import InformationSystems from './assets/pages/InformationSystems/InformationSystems';
import SoftwareEngineer from './assets/pages/SoftwareEngineer/SoftwareEngineer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Login />} />
          <Route path= '/home' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path= '/ai' element={<AI />} />
          <Route path= '/cybersecurity' element={<CyberSecurity />} />
          <Route path='/dataanalyst' element={<DataAnalyst />} />
          <Route path= '/informationsystems' element={<InformationSystems />} />
          <Route path= '/softwareengineer' element={<SoftwareEngineer />} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
