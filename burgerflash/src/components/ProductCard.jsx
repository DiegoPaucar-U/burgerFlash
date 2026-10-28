import { useState } from 'react';

export default function ProductCard({ product, onAddToCart }) {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => setCantidad(prev => prev + 1);
  const decrementar = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  const handleAdd = () => {
    onAddToCart(product, cantidad);
    setCantidad(1); 
  };

  return (
    <div className="product-card">
      <img src={product.imagen} alt={product.nombre} className="product-image" />
      <h3>{product.nombre}</h3>
      <p>{product.desc}</p>
      <span className="price">${product.precio.toFixed(2)}</span>
      
      <div className="quantity-controls">
        <button className="qty-btn" onClick={decrementar}>-</button>
        <span className="qty-display">{cantidad}</span>
        <button className="qty-btn" onClick={incrementar}>+</button>
      </div>

      <button className="add-btn" onClick={handleAdd}>Añadir al carrito</button>
    </div>
  );
}