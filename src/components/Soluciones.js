import React from "react";
import './Servicios.css'
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { FaHome } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { FaCarBattery } from "react-icons/fa";
import { PiSolarPanelFill } from "react-icons/pi";
import Icono5 from '../assets/images/icono-hogar.jpg';
import Icono6 from '../assets/images/icono-pyme.jpg';
import Icono7 from '../assets/images/icono-offgrid.jpg';
import Icono8 from '../assets/images/icono-hibrido.png';


function CardSoluciones() {
    return (
        <div className="container mt-3 mb-6">
            <div className="mt-6 mb-4">
                <h2 className="fw-bold">Soluciones</h2>
                <p className="text-muted">
                    Kits residenciales, PyME, off-grid con baterías e híbridos.
                </p>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <Card className="shadow position-relative overflow-hidden">
                        <img src={Icono5} className="marca-agua"></img>
                        <Card.Body>
                            <FaHome className="icono-card icono-energia" />
                            <Card.Title className="texto-card">Hogar 3-5 kW</Card.Title>
                            <Card.Text>
                                Balance ideal entre costo y ahorro mensual. Perfecto para viviendas con consumo promedio y buena irradiación solar.
                            </Card.Text>
                            <Button variant="primary">Solicitar asesoría</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="shadow position-relative overflow-hidden">
                        <img src={Icono6} className="marca-agua"></img>
                        <Card.Body>
                            <BsBuildingsFill className="icono-card icono-certificada" />
                            <Card.Title className="texto-card">PyME 10-20 kW</Card.Title>
                            <Card.Text>
                                 Soluciones diseñadas para operaciones con alta demanda energética. Permiten reducir costos sin afectar la productividad.
                            </Card.Text>
                            <Button variant="primary">Solicitar asesoría</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="shadow position-relative overflow-hidden">
                        <img src={Icono7} className="marca-agua"></img>
                        <Card.Body>
                            <FaCarBattery className="icono-card icono-monitoreo" />
                            <Card.Title className="texto-card">Off-grid con baterías</Card.Title>
                            <Card.Text>
                                Autonomía total en zonas sin red eléctrica. Incluye almacenamiento inteligente y control remoto del sistema.
                            </Card.Text>
                            <Button variant="primary">Solicitar asesoría</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="shadow position-relative overflow-hidden">
                        <img src={Icono8} className="marca-agua"></img>
                        <Card.Body>
                            <PiSolarPanelFill className="icono-card icono-mantencion" />
                            <Card.Title className="texto-card">Híbrido</Card.Title>
                            <Card.Text>
                                Sistemas combinados que integran paneles, baterías y conexión a red. Aseguran respaldo continuo y máxima eficiencia.
                            </Card.Text>
                            <Button variant="primary">Solicitar asesoría</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default CardSoluciones;