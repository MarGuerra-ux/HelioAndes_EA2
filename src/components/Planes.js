import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Planes() {
    return (
        <div className="container mt-5 mb-6">
            <div className="mt-6 mb-4">
                <h2 className="fw-bold">Planes</h2>
                <p className="text-muted">
                    Elige el plan que se ajusta a tu proyecto.
                </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <Card className="shadow position-relative overflow-hidden text-center">                        
                        <Card.Body>
                            <Card.Title>Básico</Card.Title>
                            <h4 className="fw-bold">3–5 kW</h4>
                            <Card.Text>
                                <ul className="list-unstyled text-center mb-4">
                                <li>Estudio Energético</li>
                                <li>Instalación estándar</li>
                                <li>Monitoreo Básico</li>
                                </ul>
                            </Card.Text>
                            <Button href="#contacto" variant="primary">Solicitar Evaluación</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="shadow position-relative overflow-hidden text-center">                        
                        <Card.Body>
                            <Card.Title>Optimizado</Card.Title>
                            <h4 className="fw-bold">10–15 kW</h4>
                            <Card.Text>
                                <ul className="list-unstyled text-center mb-4">
                                <li>Estudio Avanzado</li>
                                <li>Instalación Optimizada</li>
                                <li>Monitoreo Avanzado</li>
                                </ul>
                            </Card.Text>
                            <Button href="#contacto" variant="primary">Solicitar Evaluación</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="shadow position-relative overflow-hidden text-center">                        
                        <Card.Body>
                            <Card.Title>Autónomo</Card.Title>
                            <h4 className="fw-bold">Híbrido + Baterías</h4>
                            <Card.Text>
                                <ul className="list-unstyled text-center mb-4">
                                <li>Diseño Off-grid</li>
                                <li>Almacenamiento</li>
                                <li>Soporte Preferente</li>
                                </ul>
                            </Card.Text>
                            <Button href="#contacto" variant="primary">Solicitar Evaluación</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Planes;