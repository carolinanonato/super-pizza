import React from 'react'
import "../index.css";

export default function Card(props) {
    return (

        <div className="card">
            <img className="card-img" src={props.img} alt="" />
            <div className="info">
                <h1 className="title">{props.title}</h1>
                <p className="ingredients">{props.ingredients}</p>
                <span className="price">{props.price}</span>
            </div>


        </div >


    )
}
