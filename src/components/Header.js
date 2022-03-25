import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"
import cart from '../img/cart.png'



function Header() {
    return (
        <nav className="navigation" >
            <h1 className="logo">SUPER PIZZA</h1>
            <div className="menu">
                <Link className="menu-item" to="/">Home</Link>  {" "}
                <Link className="menu-item" to="/menu" > Menu</Link >  {" "}
                <Link className="menu-item" to="/contact" > Contact</Link >
                <img src={cart} alt="cart" />
            </div>


        </nav >
    )
}

export default Header