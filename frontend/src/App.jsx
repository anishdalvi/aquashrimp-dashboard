import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { Navbar } from './components'

function App() {


  return (
    <div>
      <Router>
      <h1>Vite + React</h1>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
      
    </div>
  )
}

export default App
