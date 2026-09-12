import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarApp = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          E-commerce
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {menuOpen && (
          <div className="w-100 mt-3">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                >
                  Nosotros
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                >
                  Iniciar sesión
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarApp;