import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (    
    <footer className="bg-dark text-light text-center py-4">
      <p className="mb-1">
        © {year} HelioAndes — Todos los derechos reservados.
      </p>
      <p className="small mb-0">
        <a href="#terminos" className="text-decoration-none text-light">Términos y Condiciones</a> |{" "}
        <a href="#privacidad" className="text-decoration-none text-light">Política de Privacidad</a>
      </p>
    </footer>
  );
}

export default Footer;
