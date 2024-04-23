import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './assets/pages/Login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path= '/' element={<Login />} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
