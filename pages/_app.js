import "../styles/global.css"; // Ensure global styles are imported here
import { CartProvider } from "../context/CartContext";

export default function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}
