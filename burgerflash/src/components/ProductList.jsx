import ProductCard from './ProductCard';

export default function ProductList({ products, onAddToCart }) {
  return (
    <section className="menu-section">
      <div className="product-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </section>
  );
}