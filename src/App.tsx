import { useState } from 'react'
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import './App.css'
import Home from './routes/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <div className="App">
    <nav className='text-white flex flex-row w-2/3 justify-end gap-10 p-4'> <div className= 'hover:text-rose-400'>Home</div> <div className= 'hover:text-rose-400'> Dashboard</div> </nav>
    
    <Routes>
      <Route path="/" element={<Home/>}  />
    </Routes> 

    <footer>
      <div className='text-white p-4 text-sm'> © Boring Engineering 2023</div>
      </footer> 
    </div>
  )
}

export default App
