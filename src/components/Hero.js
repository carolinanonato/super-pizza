import React from 'react'
import "../index.css"
import pizza from '../img/bigpizza.png'
import CarouselModule from './CarouselModule'



export default function Hero() {
    return (
        <>
            <div className='hero'>
                <img className="bigpizza" src={pizza} alt="pizza" />
                <p className='hero-text'>The best pizza <br></br><span className="inyour">in your</span> neighborhood</p>


            </div>
            <CarouselModule />

        </>
    )
}
