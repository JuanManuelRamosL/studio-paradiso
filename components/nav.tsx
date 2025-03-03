import "./nav.css"; // Importa los estilos CSS

export default function Nav() {
  return (
    <nav>
      <div className="logo">Studio Paradiso</div>
      <ul>
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
