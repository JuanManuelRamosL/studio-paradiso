import React, { useState } from "react";
import "./nav.css"; // Importa los estilos CSS

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">Studio Paradiso</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={isMenuOpen ? "open" : ""}>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#contenido">Videos</a>
        </li>
        <li>
          <a href="#nosotros">Sobre Nosotros</a>
        </li>
        <li>
          <a href="#foter">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
