import React, { useState } from 'react';
import './FAQs.css';

function FAQs() {
  // Estado para controlar qué pregunta está abierta
  const [preguntaActiva, setPreguntaActiva] = useState(null);

  // Función para abrir/cerrar
  function alternarPregunta(index) {
    if (preguntaActiva === index) {
      setPreguntaActiva(null); // si ya está abierta, la cierra
    } else {
      setPreguntaActiva(index); // abre la seleccionada
    }
  }

  return (
    <div className="faq-bg">
      <div className="faq-section container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">FAQs</h2>
          <p className="text-muted">
            Resolvemos las dudas más comunes sobre energía solar y eficiencia energética.
          </p>
        </div>

        <div className="faq-item" onClick={() => alternarPregunta(1)}>
          <h5>¿Cuánto ahorro puedo obtener con paneles solares?</h5>
          {preguntaActiva === 1 && (
            <p>Depende del consumo eléctrico y la cantidad de paneles instalados, pero puede llegar hasta un 70% en tu cuenta de luz.</p>
          )}
        </div>

        <div className="faq-item" onClick={() => alternarPregunta(2)}>
          <h5>¿Qué mantenimiento requieren los paneles?</h5>
          {preguntaActiva === 2 && (
            <p>Solo una limpieza con agua cada 2 o 3 meses y una revisión técnica anual para asegurar el rendimiento óptimo.</p>
          )}
        </div>

        <div className="faq-item" onClick={() => alternarPregunta(3)}>
          <h5>¿Cuánto dura una instalación solar?</h5>
          {preguntaActiva === 3 && (
            <p>Los paneles tienen una vida útil de entre 20 y 25 años, y los inversores alrededor de 10 años con mantenimiento adecuado.</p>
          )}
        </div>

        <div className="faq-item" onClick={() => alternarPregunta(4)}>
          <h5>¿Qué pasa si hay nubes o lluvia?</h5>
          {preguntaActiva === 4 && (
            <p>Los paneles siguen generando energía incluso en días nublados o lluviosos, aunque con menor intensidad.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
