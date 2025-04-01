import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { cart } = useCart();

    return (
        <nav className="navbar">
            <h1 className="logo">E-Commerce</h1>
            <div>
                <Link href="/">Home</Link>
                <Link href="/cart" className="cart-button">
                    🛒 Cart ({cart.length})
                </Link>
            </div>
        </nav>
    );
}
