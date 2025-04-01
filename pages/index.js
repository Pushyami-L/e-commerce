import { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../utils/api";
import Link from "next/link";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await fetchProducts();
            setProducts(data);
        }
        loadProducts();

        // Load cart from localStorage
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter((product) => product.id !== id));
    };

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        alert(`${product.name} added to cart!`);
    };

    return (
        <div>
            <nav className="navbar">
                <h1 className="title">BuyEasy</h1>
                <div className="nav-buttons">
                    <Link href="/cart">
                        <button className="cart-button">Cart ({cart.length})</button>
                    </Link>
                    <Link href="/add">
                        <button className="add-button">+ Add Product</button>
                    </Link>
                </div>
            </nav>

            <div className="product-container">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <div className="button-group">
                            <Link href={`/edit?id=${product.id}`}>
                                <button className="edit-button">Edit</button>
                            </Link>
                            <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
                            <button className="cart-add-button" onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="footer">© 2025 My E-Commerce</footer>
        </div>
    );
}
