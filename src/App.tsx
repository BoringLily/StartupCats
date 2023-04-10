import { useState } from 'react'
import { createClient } from "@supabase/supabase-js";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-slate-100 w-full h-full">
      hello
    </div>
  )
}

export default App
