import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages'
import { Navbar } from './components'

function App() {

  setInterval(() => {
    window.location.reload();
  }, 10000);

  return (
    <div>
      <Router>
        <h1>AquaShrimp</h1>
        <div className="container">
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>

    </div>
  )
}

export default App
