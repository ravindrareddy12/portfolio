// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Navbar (){
  return (
    <nav>
        <h3 class="logo" >Ravindra.dev</h3>
        <ul>
        <li>
            <a href="#container">Home</a>
        </li>
        <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact-container">Contact</a>
            </li>
            <li>
                <i class="fa-solid fa-bars-staggered mobile-menu"></i></li>
        </ul>
    </nav>
  )
}


export default  Navbar