import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-item'>
        <Link to='/main'>하루건강</Link>
      </div>
      <div className='header-item'>
        <Link to='/login'>LOGIN</Link>
      </div>
      <div className='header-item'>
        <Link to='/join'>JOIN</Link>
      </div>

    </div>
  )
}

export default Header