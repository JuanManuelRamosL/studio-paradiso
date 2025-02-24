export default function Nav() {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-semibold">Studio Paradiso</div>
      <ul className="flex gap-6">
        <li><a href="#" className="hover:text-gray-400">Inicio</a></li>
        <li><a href="#" className="hover:text-gray-400">Videos</a></li>
        <li><a href="#" className="hover:text-gray-400">Sobre Nosotros</a></li>
        <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
      </ul>
    </nav>
  );
}
