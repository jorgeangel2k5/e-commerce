import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const NavbarApp = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/login");
  };

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

              {/* Opción visible solo para Administradores */}
              {user?.rol === "admin" && (
                <li className="nav-item">
                  <Link
                    className="nav-link text-warning font-weight-bold"
                    to="/admin"
                    onClick={() => setMenuOpen(false)}
                  >
                    Panel Admin
                  </Link>
                </li>
              )}

              {/* Renderizado condicional según la sesión del usuario */}
              {user ? (
                <>
                  <li className="nav-item d-flex align-items-center my-2 text-light">
                    <span className="me-2">Hola, <strong>{user.usuario}</strong></span>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={handleLogout}
                    >
                      Cerrar sesión
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                  >
                    Iniciar sesión
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarApp;