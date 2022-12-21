import React from "react";
export default function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container d-flex justify-content-center">
          <a className="navbar-brand" href="/">
            Paez Extintores
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
              <a className="nav-link" href="/">
                Acerca de nosotros
              </a>
              <a className="nav-link" href="/">
                Contactenos
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
