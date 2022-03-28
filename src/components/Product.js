import React from 'react';
import '../index.css'

export default function Product(props) {
    const { product, onAdd } = props;
    return (

        <div className="card">
            <div className="first-card">
                <img className="menu-image" src={product.img} alt="" />
            </div>
            <div className="second-card">
                <div className="info">
                    <h1 className="card-title">{product.title}</h1>
                    <p className="ingredients">{product.ingredients}</p>
                    <span className="price">${product.price}</span>
                </div>
                <div>
                    <button class="add-pizza" onClick={() => onAdd(product)}>Add To Cart</button>
                </div>
            </div>
        </div>

    );
}


