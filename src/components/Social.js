import React from 'react'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'

export default function Social() {
    return (
        <div className='social-media'>
            <a href="http://www.google.com"><img className='social-item' src={facebook} alt="facebook" /></a>
            <a href="http://www.google.com"><img className='social-item' src={instagram} alt="instagram" /></a>
            <a href="http://www.twitter.com/Carolthedev"><img className='social-item' src={twitter} alt="twitter" /></a>
        </div >
    )
}
