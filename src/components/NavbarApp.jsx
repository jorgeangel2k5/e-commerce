import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

const NavbarApp = () => {
  const { user, logout } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-zinc-900 border-b border-zinc-800 text-white w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold text-amber-500 hover:text-amber-400 transition-colors"
        >
          Urban Bikes
        </Link>

        {/* NAVEGACIÓN ESCRITORIO (md:) */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/") ? "text-amber-500 font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Inicio
          </Link>

          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${
              isActive("/about") ? "text-amber-500 font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Sobre Nosotros
          </Link>

          {user?.rol === "admin" && (
            <Link
              to="/admin"
              className={`text-sm font-semibold transition-colors ${
                isActive("/admin") ? "text-amber-400" : "text-amber-500/80 hover:text-amber-400"
              }`}
            >
              Panel Admin
            </Link>
          )}
        </nav>

        {/* USUARIO / SESIÓN ESCRITORIO (md:) */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-300">
                Hola, <strong className="text-white">{user.usuario}</strong>
              </span>
              <button
                onClick={handleLogout}
                className="px-2.5 py-1 text-xs border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white rounded-md transition-colors cursor-pointer"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1.5 text-xs bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-md transition-colors"
            >
              Iniciar sesión
            </Link>
          )}
        </div>

        {/* BOTÓN HAMBURGUESA MÓVIL */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL (Aparece bajo la cabecera superior) */}
      {isOpen && (
        <nav className="md:hidden bg-zinc-900 border-t border-zinc-800 px-4 pt-2 pb-4 space-y-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm font-medium transition-colors ${
              isActive("/") ? "text-amber-500 font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Inicio
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm font-medium transition-colors ${
              isActive("/about") ? "text-amber-500 font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Sobre Nosotros
          </Link>

          {user?.rol === "admin" && (
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-sm font-semibold transition-colors ${
                isActive("/admin") ? "text-amber-400" : "text-amber-500/80 hover:text-amber-400"
              }`}
            >
              Panel Admin
            </Link>
          )}

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
            {user ? (
              <>
                <span className="text-xs text-gray-300">
                  Hola, <strong className="text-white">{user.usuario}</strong>
                </span>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 text-xs border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white rounded-md transition-colors cursor-pointer"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2 text-xs bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-md transition-colors block"
              >
                Iniciar sesión
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavbarApp;