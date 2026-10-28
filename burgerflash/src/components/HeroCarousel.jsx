import { useState, useEffect } from 'react';

const slides = [
  { id: 1, badge: "100%", badgeSub: "PURA CARNE", title1: "THE BIG", title2: "FLASH BURGER", titleSpan: "With Cheese", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, badge: "NUEVO", badgeSub: "TOCINO", title1: "ULTIMATE", title2: "BACON BLAST", titleSpan: "Extra Crispy", img: "https://images.unsplash.com/photo-1594212202875-86ac1c618331?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, badge: "CRUNCH", badgeSub: "POLLO", title1: "CLASSIC", title2: "CHICKEN", titleSpan: "Sandwich", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop" }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));

  const slide = slides[currentSlide];

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-banner">
        <button className="carousel-arrow left-arrow" onClick={prevSlide}>❮</button>
        <button className="carousel-arrow right-arrow" onClick={nextSlide}>❯</button>

        <div className="hero-badge">
          <span>{slide.badge}</span><br />{slide.badgeSub}
        </div>
        
        <div className="hero-text">
          <h1>{slide.title1}</h1>
          <h2>{slide.title2} <span>{slide.titleSpan}</span></h2>
        </div>
        
        <img key={slide.id} src={slide.img} alt="Promo" className="hero-image fade-in" />
      </div>
    </section>
  );
}