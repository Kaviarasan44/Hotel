import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='container-fluid'>
      <header className='' >
        <h1 className='justify-content-center'>Erode Amman Mess <span><sub>-Veg/Non-veg</sub></span></h1>
     
      <nav  >
        <ul className='nav nav-pills nav-fill'>
            <li className='nav-item'><a className='nav-link' href="#Content">Home</a></li>
            <li className='nav-item'><a className='nav-link' href="#About">About us</a></li>
            <li className='nav-item'><a className='nav-link' href="#Contact">Contact us</a></li>
            <li className='nav-item'><a className='nav-link' href="">Order Online</a></li>
        </ul>
      </nav>
      </header>
    </div>
  )
}

export default Header