import React from "react";
import Imagen from '../assets/images/energia-solar.jpg'
function Hero() {
  return (
    <section id="inicio" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="fw-bold">
              Energía solar accesible y confiable para tu hogar o pyme
            </h1>
            <p className="lead">
              Diseñamos e instalamos soluciones solares personalizadas en todo Chile.
              La DEMO te guia con valores referenciales
            </p>
            <a href="#demo-calculadora" className="btn btn-primary me-2">
              Ver DEMO
            </a>
            <a href="/catalogo-helioandes.pdf" className="btn btn-outline-secondary">
              Descargar Catálogo
            </a>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              src={require("../assets/images/energia-solar.jpg")}
              alt="Sistema solar HelioAndes"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;