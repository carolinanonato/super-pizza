import React, { useState } from 'react'
import { db } from '../firebase'

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message,
        })
            .then(() => {
                alert("Message has been submitted!")
            })
            .catch((error) => {
                alert(error.message)
            })
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div className="contactform">
            <form className="form">

                <label>Name</label>
                <input
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <label>Email</label>
                <input placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label>Message</label>
                <textarea placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}></textarea>

                <button onClick={handleSubmit} type="submit">Submit</button>

            </form>
        </div>
    )
}
