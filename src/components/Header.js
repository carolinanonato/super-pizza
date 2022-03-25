import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
    return (
        <nav className="d-flex p-2" >
            <h1>SUPER PIZZA</h1>
            <Link to="/">Home</Link> | {" "}
            <Link to="/menu" > Menu</Link > | {" "}
            <Link to="/contact" > Contact</Link >


        </nav >
    )
}

export default Header