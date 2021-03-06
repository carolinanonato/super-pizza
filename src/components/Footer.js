import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-text'>
                <p className="name-footer">SUPER PIZZA RESTAURANT</p>
                <p className='address'>396 BROWNS LINE <br></br>
                    ETOBICOKE, ON, M8W 3T8<br></br>
                    (437) 988-9151
                </p>
            </div>
            <div className='franchise'>
                <p className='franchise-text'>INTERESTED IN OWNING YOUR OWN SUPER PIZZA FRANCHISE?
                    VIEW OUR FRANCHISING INFORMATION</p></div>

            <p className='hours'><span className='hours-title'>HOURS</span><br></br>
                Monday - Thursday:	10:00am - 12:00am <br></br>
                Friday - Saturday:	10:00am - 1:00am <br></br>
                Sunday:	4:00pm - 11:00pm</p>
        </div>
    )
}
