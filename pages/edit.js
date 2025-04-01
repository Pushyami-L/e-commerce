import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchProductById, updateProduct } from "../utils/api";
import Link from "next/link";

export default function EditProduct() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState({ name: "", price: "" });

    useEffect(() => {
        if (id) {
            async function loadProduct() {
                const data = await fetchProductById(id);
                setProduct(data);
            }
            loadProduct();
        }
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProduct(id, product);
        router.push("/");
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-title">
                    <h2>Edit Product</h2>
                </div>
                <div className="nav-buttons">
                    <Link href="/cart">
                        <button className="cart-button">Cart 🛒</button>
                    </Link>
                </div>
            </nav>

            {/* Edit Product Form */}
            <div className="edit-container">
                <h2 className="edit-title">Edit Product</h2>
                <form className="edit-form" onSubmit={handleSubmit}>
                    <input
                        className="input-field"
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="input-field"
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                    <button className="save-button" type="submit">
                        Save
                    </button>
                </form>
                <Link href="/">
                    <button className="back-button">Back</button>
                </Link>
            </div>

            {/* Footer */}
            <div>
                <div className="footer">&copy; 2025 My Store. All rights reserved.</div>
            </div>
        </>
    );
}
