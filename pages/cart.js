import { useState, useEffect } from "react";
import Link from "next/link";

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div>
            <nav className="navbar">
                <h2 className="title">Shopping Cart</h2>
                <Link href="/">
                    <button className="cart-button">Back</button>
                </Link>
            </nav>

            <div className="cart-container">
                {cart.length === 0 ? (
                    <h3 className="empty-cart">Your cart is empty!</h3>
                ) : (
                    cart.map((product, index) => (
                        <div key={index} className="cart-item">
                            <div>
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                                <button className="delete-button" onClick={() => removeFromCart(index)}>Remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <footer className="footer">© 2025 My E-Commerce</footer>
        </div>
    );
}
