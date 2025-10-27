import React from "react";
import './Testimonios.css';
import Card from 'react-bootstrap/Card';

function Testimonios() {
    return (
        <div className="container mb-6">
            <div className="mt-6 mb-4">
                <h2 className="fw-bold">Testimonios</h2>
                <p className="text-muted">
                    Clientes que ya confían en HelioAndes.
                </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col">
                    <Card className="shadow border-0 h-100">
                        {/* Header con óvalo y datos */}
                        <div className="d-flex align-items-center gap-3 mt-2">
                            <div className="avatar-placeholder"></div>
                            <div>
                                <p className="fw-bold mt-2 mb-0">Carolina Pérez</p>
                                <p className="text-muted small mb-0">Peñalolén, Región Metropolitana</p>
                                <hr/>
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Text className="text-center">
                                “El sistema de monitoreo me permite revisar todo desde el celular.”
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="shadow border-0 h-100">
                        <div className="d-flex align-items-center gap-3 mt-2">
                            <div className="avatar-placeholder"></div>
                            <div>
                                <p className="fw-bold mt-2 mb-0">Jorge Aravena</p>
                                <p className="text-muted small mb-0">La Serena, Región de Coquimbo</p>
                                <hr/>
                            </div>
                        </div>
                        <Card.Body>                            
                            <Card.Text className="text-center">
                                “Instalación rápida y ahorro visible en la primera boleta.”
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="shadow border-0 h-100">
                        <div className="d-flex align-items-center gap-3 mt-2">
                            <div className="avatar-placeholder"></div>
                            <div>
                                <p className="fw-bold mt-2 mb-0">María Torres</p>
                                <p className="text-muted small mb-0">Osorno, Región de Los Lagos</p>
                                <hr/>
                            </div>
                        </div>
                        <Card.Body>                            
                            <Card.Text className="text-center">
                                “Excelente asesoría y postventa. 100% recomendado”
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Testimonios;