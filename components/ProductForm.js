import { useState } from "react";

export default function ProductForm({ initialProduct = {}, onSubmit }) {
    const [name, setName] = useState(initialProduct.name || "");
    const [price, setPrice] = useState(initialProduct.price || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, price });
    };

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
            <button type="submit" className="save-button">Save</button>
        </form>
    );
}
