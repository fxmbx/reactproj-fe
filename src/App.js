
import './App.css';

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Department from './Components/Department';
import Employee from './Components/Employee';
import Home from './Components/Home';
function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">
          React Js Framework
        </h3>
        <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
          <ul className='navbar-nav'>
            <li className='nav-item- m-1'>
              <Link onClick={() => console.log("😃 pressed")} className="btn btn-light btn-outline-primary" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item- m-1">
              <Link className="btn btn-light btn-outline-primary" to="/department">
                Department
              </Link>
            </li>
            <li className="nav-item- m-1">
              <Link className="btn btn-light btn-outline-primary" to="/employee">
                Employee
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/department' element={<Department />} />
          <Route path='/employee' element={<Employee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
