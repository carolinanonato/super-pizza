import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"



function Header() {
    return (
        <nav className="navigation" >
            <h1 className="logo">SUPER PIZZA</h1>
            <div className="menu">
                <Link className="menu-item" to="/">Home</Link>  {" "}
                <Link className="menu-item" to="/menu" > Menu</Link >  {" "}
                <Link className="menu-item" to="/contact" > Contact</Link >
            </div>


        </nav >
    )
}

export default Header