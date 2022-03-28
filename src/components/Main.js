import React from 'react';
import Product from './Product';
import "../index.css"

export default function Main(props) {
    const { products, onAdd } = props;
    return (
        <main className="">
            <h2 className="menu-title">Menu</h2>
            <div className="all-cards">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    );
}