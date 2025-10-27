import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../FAQs.css";

function FAQ() {
  return (
    <section className="container my-5" id="faq">
      <div className="text-center mb-4">
        <h2 className="fw-bold">FAQs</h2>
        <p className="text-muted">
          Resolvemos las dudas más comunes sobre nuestros sistemas solares.
        </p>
      </div>
      
      <Accordion defaultActiveKey="0" alwaysOpen className="faq-accordion">        
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Qué garantías incluyen los equipos e instalación?</Accordion.Header>
          <Accordion.Body>
            Nuestros paneles cuentan con garantía de rendimiento de 25 años y el inversor con garantía del fabricante (normalmente 5 a 10 años). La instalación realizada por nuestro equipo certificado incluye garantía de servicio según el plan contratado.
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Qué mantenciones requiere el sistema?</Accordion.Header>
          <Accordion.Body>
            Recomendamos limpieza de paneles cada 2–3 meses (según polvo/lluvia) y una revisión técnica anual para verificar conexiones, estructuras y rendimiento del inversor. Ofrecemos planes de mantención programada.
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Puedo monitorear la generación en tiempo real?</Accordion.Header>
          <Accordion.Body>
            Sí. El sistema incluye monitoreo en línea para revisar generación, consumo y alertas desde el celular o computador. Podrás descargar reportes y recibir notificaciones ante caídas de rendimiento.
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="3">
          <Accordion.Header>¿Cuánto se demoran en instalar?</Accordion.Header>
          <Accordion.Body>
            Para sistemas residenciales típicos (3–5 kW), la instalación toma entre 1 y 3 días hábiles, dependiendo del tipo de techo y la complejidad. En pymes (10–20 kW), el plazo suele ser de 3 a 7 días hábiles.
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="4">
          <Accordion.Header>¿Qué requisitos eléctricos necesito cumplir?</Accordion.Header>
          <Accordion.Body>
            Se requiere tablero en buen estado, protecciones adecuadas y espacio para el inversor. Nuestro equipo revisa la red interna y, de ser necesario, recomienda ajustes para cumplir con la normativa eléctrica y la SEC.
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="5">
          <Accordion.Header>¿Cuánto puedo ahorrar con paneles solares?</Accordion.Header>
          <Accordion.Body>
            Depende de tu consumo y del dimensionamiento del sistema. En hogares, el ahorro puede llegar hasta un 70% de la cuenta eléctrica, sujeto a irradiación, hábitos de consumo y tarifa.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default FAQ;
