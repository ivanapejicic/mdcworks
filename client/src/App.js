import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './assets/pages/Login/Login';
import Home from './assets/pages/Home/Home';
import Admin from './assets/pages/Admin/Admin';
import Jobs from './assets/pages/Jobs/Jobs';
import Company from './assets/pages/Company/Company';
import About from './assets/pages/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/talent' element={<Admin />} />
          <Route path='/company' element={<Company />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
