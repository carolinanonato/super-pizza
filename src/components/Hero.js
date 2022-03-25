import React from 'react'
import "../index.css"
import pizza from '../img/bigpizza.png'


export default function Hero() {
    return (
        <div className='hero'>
            <img className="bigpizza" src={pizza} alt="pizza" />
            <p className='hero-text'>The best pizza <br></br><span class="inyour">in your</span> neighborhood</p>


        </div>
    )
}
