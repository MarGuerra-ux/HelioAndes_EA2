import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Contacto() {
  return (
    <section className="mt-6 py-5 bg-light">
      <Container>
        <h2 className="text-center mb-3">Contáctanos</h2>
        <p className="text-center mb-5 text-muted">
          Cuentanos tu proyecto y agenda una asesoría.
        </p>

        <Form className="mx-auto" style={{ maxWidth: "650px" }}>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="correo@ejemplo.com" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMensaje">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí..." required />
          </Form.Group>

          <div className="text-center">
            <Button variant="dark" type="submit">
              Enviar mensaje
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}

export default Contacto;
