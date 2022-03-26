import React from 'react'
import "../index.css";

export default function Card(props) {

    const [count, setCount] = React.useState(0)
    function add() {
        setCount(count + 1)
    }

    function subtract() {
        setCount(count - 1)
    }
    return (

        <div className="card">
            <div className="first-card">
                <img className="card-img" src={props.img} alt="" />
            </div>
            <div className="second-card">
                <div className="info">
                    <h1 className="card-title">{props.title}</h1>
                    <p className="ingredients">{props.ingredients}</p>
                    <span className="price">${props.price}</span>
                </div>

            </div>
            <div className="counter">
                <button className="counter--minus" onClick={subtract}>–</button>
                <div className="counter--count">
                    <h1>{count}</h1>
                </div>
                <button className="counter--plus" onClick={add}>+</button>
            </div>

        </div >


    )
}
