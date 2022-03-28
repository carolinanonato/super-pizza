import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"
import cart from '../img/cart.png'
import logo from '../img/superpizza_logo.png'
import Social from './Social';



function Header() {
    return (
        <nav className="navigation" >
            <Social />
            <Link to="/"><img className="logo-img" src={logo} alt="logo" /></Link>
            <div className="menu">
                <Link className="menu-item" to="/">Home</Link>  {" "}
                <Link className="menu-item" to="/menu" > Menu</Link >  {" "}
                <Link className="menu-item" to="/contact" > Contact</Link >

            </div>


        </nav >
    )
}

export default Header