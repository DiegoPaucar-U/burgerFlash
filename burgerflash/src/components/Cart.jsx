export default function Cart({ cartItems, onCheckout, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  return (
    <aside className="cart-section">
      <h2>Tu Pedido</h2>
      <ul id="cart-items">
        {cartItems.length === 0 ? (
          <li className="empty-cart">El carrito está vacío</li>
        ) : (
          cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-details">
                <span className="item-name">{item.cantidad}x {item.nombre}</span>
                <span className="item-price">${(item.precio * item.cantidad).toFixed(2)}</span>
              </div>
              <button className="remove-btn" onClick={() => onRemove(item.id)}>✖</button>
            </li>
          ))
        )}
      </ul>
      <div className="total-container">
        <strong>Total: </strong> ${total.toFixed(2)}
      </div>
      <button className="checkout-btn" onClick={onCheckout}>Pagar Ahora</button>
    </aside>
  );
}