import styles from "../styles/ProductList.module.css";

const ProductList = ({ products = [] }) => {  // Ensure default empty array
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product List</h2>
      <div className={styles.grid}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className={styles.card}>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.price}>${product.price}</p>
            </div>
          ))
        ) : (
          <p className={styles.noProducts}>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
