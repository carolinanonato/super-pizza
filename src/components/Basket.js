import React from 'react';
import "../index.css"

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.13;
    const shippingPrice = 8.90;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className="shopping-cart">
            <h2 class="cart-title">Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div class="empty">Cart is empty</div>}
                {cartItems.map((item) => (
                    <div className="item-check">
                        <div key={item.id} className="">
                            <div className="">{item.title}</div>
                            <div className="">
                                <div className="add-remove">
                                    <button onClick={() => onRemove(item)} className="remove">
                                        -
                                    </button>{' '}
                                    <button onClick={() => onAdd(item)} className="add">
                                        +
                                    </button>

                                </div>

                            </div>


                        </div>
                        <div className="cart-price">
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="item-check">
                            <div className="">Items Price</div>
                            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="item-check">
                            <div className=""> HST</div>
                            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="item-check">
                            <div className="">Shipping Price</div>
                            <div className="col-1 text-right">
                                ${shippingPrice.toFixed(2)}
                            </div>
                        </div>

                        <div className="item-check">
                            <div className="">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong>${totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="checkout-div">
                            <button className="checkout-button" onClick={() => alert('Your order is being prepared!')}>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}