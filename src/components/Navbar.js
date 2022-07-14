import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import {FaTimes, FaBars} from 'react-icons/fa'
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
  const[click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)
  
  return (
    <div className='hero'>
      <nav className='nav'>
        <NavLink to='/'><img src='/images/Logonav.png' alt="logo"/></NavLink>
        <ul className={click? 'navList active':'navList'} >
          <li>
            <Link smooth to='#about' style={{cursor:'pointer',textDecoration:'none' }} className='nav-link'>About</Link>  
          </li>
          <li>
          <NavLink className='nav-link' style={{cursor:'pointer',textDecoration:'none' }} to='/token-allocation'>Tokenomics</NavLink>
          </li>
          <li>
          <NavLink className='nav-link' to='/roadmap' style={{cursor:'pointer',textDecoration:'none'}}>Roadmap</NavLink>
          </li>
          <li>
          <NavLink className='nav-link' to='/' style={{cursor:'pointer',textDecoration:'none'}}>Whitepaper</NavLink>
          </li>
          <li>
          <NavLink to='/faq' className='nav-link' style={{cursor:'pointer',textDecoration:'none'}}>FAQ</NavLink>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color:''}}/>):(<FaBars size={20} style={{color:''}}/>)}
        </div>
    </nav>
      <div className='hero-inner'>
          <h1 className='grobold hero-title'>Carlossy</h1>
          <h3 className='grobold'>The Caterpillar</h3>
          <p>The meme coin for all</p>
          <button>Enter Presale</button>
      </div>
      <div className='countdown'>
        <div className='countdown-inner'>
        <h2 className='grobold'>Presale Countdown</h2>
        <p>Hurry! Register for presale before time runs out</p>
        <div className='timer'>
          <div><p className='grobold countdown_value'  >120</p>   <br/> DAYS</div>
          <div><p className='grobold countdown_value'>03</p>  <br/> HOURS</div>
          <div><p className='grobold countdown_value'>54</p>  <br/> MINUTES</div>
          <div><p className='grobold countdown_value'>09</p>  <br/> SECONDS</div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar