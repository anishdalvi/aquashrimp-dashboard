import React from 'react'
import { Link ,useNavigate } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
          <p className='navlinks'>
              <Link to=""> Home </Link> 
              
              <Link to="/register"> Register </Link> 
              
              <Link to="/login"> Login </Link>
              
          </p>      
    </div>
  )
}

export default Navbar