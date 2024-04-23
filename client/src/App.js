import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './assets/pages/Login/Login';
import Home from './assets/pages/Home/Home';
import Admin from './assets/pages/Admin/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Login />} />
          <Route path= '/home' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
