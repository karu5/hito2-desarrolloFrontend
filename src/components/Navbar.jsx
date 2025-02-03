import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";  
import { AppContext } from "../context/AppContext"; 

const Navbar = () => {
  const navigate = useNavigate(); 
  const { cart } = useContext(AppContext); 

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Logo</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gallery">Catálogo</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Iniciar sesión
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/login">Iniciar sesión</a></li>
                <li><a className="dropdown-item" href="/registro">Registrate</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/profile">Cerrar sesión</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">Mi perfil</a>
            </li>
          </ul>
          <form className="d-flex">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={() => navigate("/cart")} 
            >
              Mi carrito ({totalItems}) 
            </button>          
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;