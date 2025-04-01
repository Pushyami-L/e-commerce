const API_URL = "http://localhost:3000/products";

export async function fetchProducts() {
    const res = await fetch(API_URL);
    return res.json();
}

export async function fetchProductById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
}

export async function createProduct(product) {
    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
}

export async function updateProduct(id, product) {
    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
}

export async function deleteProduct(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
