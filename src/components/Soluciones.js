import React from "react";
import './Servicios.css'
import Card from 'react-bootstrap/Card';
import { FaHome } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { FaCarBattery } from "react-icons/fa";
import { PiSolarPanelFill } from "react-icons/pi";


function CardSoluciones() {
    return (
        <div className="container mt-3">
            <div className="mt-6 mb-4">
                <h2 className="fw-bold">Soluciones</h2>
                <p className="text-muted">
                    Kits residenciales, PyME, off-grid con baterías e híbridos.
                </p>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <Card style={{ width: '18rem' }} className="shadow position-relative overflow-hidden">
                        <Card.Body>
                            <FaHome className="icono-card icono-energia" />
                            <Card.Title className="texto-card">Hogar 3-5 kW</Card.Title>
                            <Card.Text>
                                Balance ideal entre costo y ahorro mensual. Perfecto para viviendas con consumo promedio y buena irradiación solar.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card style={{ width: '18rem' }} className="shadow position-relative overflow-hidden">
                        <Card.Body>
                            <BsBuildingsFill className="icono-card icono-certificada" />
                            <Card.Title className="texto-card">PyME 10-20 kW</Card.Title>
                            <Card.Text>
                                 Soluciones diseñadas para operaciones diurnas con alta demanda energética. Permiten reducir costos fijos sin afectar la productividad.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card style={{ width: '18rem' }} className="shadow position-relative overflow-hidden">
                        <Card.Body>
                            <FaCarBattery className="icono-card icono-monitoreo" />
                            <Card.Title className="texto-card">Off-grid con baterías</Card.Title>
                            <Card.Text>
                                Autonomía total en zonas sin red eléctrica. Incluye almacenamiento inteligente y control remoto del sistema.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card style={{ width: '18rem' }} className="shadow position-relative overflow-hidden">
                        <Card.Body>
                            <PiSolarPanelFill className="icono-card icono-mantencion" />
                            <Card.Title className="texto-card">Hybrido</Card.Title>
                            <Card.Text>
                                Sistemas combinados que integran paneles, baterías y conexión a red. Aseguran respaldo continuo y máxima eficiencia.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default CardSoluciones;