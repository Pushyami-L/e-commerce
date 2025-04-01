import { useState } from "react";
import { useRouter } from "next/router";
import { createProduct } from "../utils/api";
import Link from "next/link";

export default function AddProduct() {
    const router = useRouter();
    const [product, setProduct] = useState({ name: "", price: "" });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProduct(product);
        router.push("/");
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-title">
                    <h2>Add Product</h2>
                </div>
                <div className="nav-buttons">
                    <Link href="/cart">
                        <button className="cart-button">Cart 🛒</button>
                    </Link>
                </div>
            </nav>

            {/* Add Product Form */}
            <div className="add-container">
                <h2 className="add-title">Add Product</h2>
                <form className="add-form" onSubmit={handleSubmit}>
                    <input
                        className="input-field"
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                        required
                    />
                    <input
                        className="input-field"
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="Price"
                        required
                    />
                    <button className="save-button" type="submit">Add Product</button>
                </form>
                <Link href="/">
                    <button className="back-button">Back</button>
                </Link>
        </div>
            <div className="footer">© 2025 My E-Commerce</div>
        </div>
    );
}
