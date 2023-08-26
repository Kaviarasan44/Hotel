import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <h1 className='h1_header'>Erode Amman Mess <span className='headersub'><sub>-Veg/Non-veg</sub></span></h1>
      </div>
      <div className='navbar'>
        <ul>
            <li><a href="#Content">Home</a></li>
            <li><a href="#About">About us</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="#Contact">Contact us</a></li>
            <li><a href="">Order Online</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header