export default function Header({ cartCount, vistaActual, setVistaActual }) {
  
  // Función para cambiar de pantalla evitando que el navegador recargue
  const cambiarVista = (e, nuevaVista) => {
    e.preventDefault();
    setVistaActual(nuevaVista);
  };

  return (
    <header className="main-header">
      <div className="logo-container" onClick={(e) => cambiarVista(e, 'inicio')} style={{ cursor: 'pointer' }}>
        <span className="star-icon">⭐</span>
        <span className="brand-name">BurgerFlash</span>
      </div>
      
      <nav className="main-nav">
        <a 
          href="#" 
          className={vistaActual === 'inicio' ? 'active' : ''} 
          onClick={(e) => cambiarVista(e, 'inicio')}
        >
          INICIO
        </a>
        <a 
          href="#" 
          className={vistaActual === 'menu' ? 'active' : ''} 
          onClick={(e) => cambiarVista(e, 'menu')}
        >
          MENÚ BURGERFLASH
        </a>
        <a 
          href="#" 
          className={vistaActual === 'locales' ? 'active' : ''} 
          onClick={(e) => cambiarVista(e, 'locales')}
        >
          ENCUENTRA TU FLASH
        </a>
      </nav>

      <div className="cart-info" onClick={(e) => cambiarVista(e, 'menu')} style={{ cursor: 'pointer' }}>
        🛒 <span>{cartCount}</span>
      </div>
    </header>
  );
}