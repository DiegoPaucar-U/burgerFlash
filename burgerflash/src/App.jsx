import { useState } from 'react'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import './App.css'

const productosDb = [
    { id: 1, nombre: 'Flash Burger', categoria: 'Hamburguesas', imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop', desc: 'Carne a la parrilla, queso, lechuga y tomate.', precio: 5.99 },
    { id: 2, nombre: 'Doble Bacon', categoria: 'Hamburguesas', imagen: 'https://images.unsplash.com/photo-1594212202875-86ac1c618331?w=500&auto=format&fit=crop', desc: 'Doble carne con tocino ahumado.', precio: 7.25 },
    { id: 3, nombre: 'Chicken Burger', categoria: 'Hamburguesas', imagen: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&auto=format&fit=crop', desc: 'Pollo crujiente, mayonesa y pepinillos.', precio: 6.50 },
    { id: 4, nombre: 'Papas Crispy', categoria: 'Acompañantes', imagen: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&auto=format&fit=crop', desc: 'Porción grande de papas crujientes.', precio: 2.99 },
    { id: 5, nombre: 'Aros de Cebolla', categoria: 'Acompañantes', imagen: 'https://images.unsplash.com/photo-1639024470081-ce8363715bb9?w=500&auto=format&fit=crop', desc: 'Aros empanizados dorados.', precio: 3.50 },
    { id: 6, nombre: 'Refresco Cola', categoria: 'Bebidas', imagen: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop', desc: 'Bebida helada de máquina.', precio: 1.50 }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  
  // NAVEGACIÓN: Estado para controlar qué pantalla se ve
  const [vistaActual, setVistaActual] = useState('inicio');

  const addToCart = (product, cantidad) => {
    setCart(prevCart => {
      const existe = prevCart.find(item => item.id === product.id);
      if (existe) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        );
      }
      return [...prevCart, { ...product, cantidad: cantidad }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const checkout = () => {
    if (cart.length === 0) return alert("Tu carrito está vacío.");
    const total = cart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    alert(`¡Gracias por tu compra! Total: $${total.toFixed(2)}`);
    setCart([]); 
  };

  const productosFiltrados = categoriaActiva === 'Todas' 
    ? productosDb 
    : productosDb.filter(prod => prod.categoria === categoriaActiva);

  const totalArticulos = cart.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <>
      <Header 
        cartCount={totalArticulos} 
        vistaActual={vistaActual} 
        setVistaActual={setVistaActual} 
      />

      {/* PANTALLA 1: INICIO */}
      {vistaActual === 'inicio' && (
        <HeroCarousel />
      )}

      {/* PANTALLA 2: MENÚ Y CARRITO */}
      {vistaActual === 'menu' && (
        <>
          <section className="filter-section" style={{ marginTop: '2rem' }}>
            <h2>Elige tu antojo</h2>
            <div className="filter-buttons">
              {['Todas', 'Hamburguesas', 'Acompañantes', 'Bebidas'].map(cat => (
                <button 
                  key={cat} 
                  className={categoriaActiva === cat ? 'active' : ''}
                  onClick={() => setCategoriaActiva(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          <main id="menu">
            <ProductList products={productosFiltrados} onAddToCart={addToCart} />
            <Cart cartItems={cart} onCheckout={checkout} onRemove={removeFromCart} />
          </main>
        </>
      )}

      {/* PANTALLA 3: SUCURSALES (Ejemplo de tercera página) */}
      {vistaActual === 'locales' && (
        <section className="filter-section" style={{ marginTop: '4rem', height: '60vh' }}>
          <h2>Encuentra tu Flash</h2>
          <p style={{ color: '#aaa', fontSize: '1.2rem', marginTop: '1rem' }}>
            Próximamente abriremos sucursales en tu ciudad. ¡Mantente atento!
          </p>
        </section>
      )}
    </>
  )
}