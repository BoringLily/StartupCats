import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {ThemeSupa} from '@supabase/auth-ui-shared'

import './App.css'

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Dashboard from './routes/Dashboard';
import Home from './routes/Home';
import AddCard from './routes/AddCard'
import Badge from './components/Badge'
import UpdateCard from './routes/UpdateCard'

const supabaseClient = createClient(import.meta.env.VITE_SB_URL, import.meta.env.VITE_SB_KEY)

function App() {
  const [loggedIn, setLoggedIn] = useState(true);


  const linkDashboard = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
    const navigate = useNavigate();
    navigate("/dashboard")
  }

  return (
    <div className="App">
      <nav className='text-white flex flex-row w-2/3 justify-end gap-10 p-4'> <Link to="/" className='hover:text-rose-400'>Home</Link> <Link to="/dashboard" className='hover:text-rose-400'> Dashboard</Link> </nav>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={loggedIn}/>} />
        <Route path="/dashboard" element={<Dashboard supabase={supabaseClient}/>} />
        <Route path="/dashboard/add" element={<AddCard supabase={supabaseClient}/>}/>
        <Route path="/dashboard/:id" element={<UpdateCard supabase={supabaseClient}/>} />
      </Routes>
      <footer>
        <div className='text-white p-4 text-sm'> © Boring Engineering 2023</div>
      </footer>
    </div>
  )
}

export default App
