import React from 'react'
import ContactForm from '../components/ContactForm'
import MapContainer from '../components/MapContainer'

export default function Contact() {
    return (
        <div className='contact'>
            <h1 className="directions">
                CONTACT FORM
            </h1>
            <ContactForm />
            <h1 className="directions">
                DIRECTIONS
            </h1>
            <MapContainer />


        </div>
    )
}
