import React from "react";
import './Servicios.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Icono1 from '../assets/images/icono-energia.png';
import Icono2 from '../assets/images/icono-certificada.png';
import Icono3 from '../assets/images/icono-mantencion.png';
import Icono4 from '../assets/images/icono-monitoreo.png';
import { RxLightningBolt } from "react-icons/rx";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbDeviceAnalytics } from "react-icons/tb";
import { BsTools } from "react-icons/bs";

function CardServicios() {
    return (        
        <div className="container mt-3">
            <div className="mt-3 mb-4">
                <h2 className="fw-bold">Servicios</h2>
                <p className="text-muted">
                    Estudio energético, instalación certificada, monitoreo y mantenición
                </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col-lg-3">
                    <Card className="shadow position-relative overflow-hidden">
                        <img src={Icono1} className="marca-agua"></img>
                        <Card.Body>
                            <RxLightningBolt className="icono-card icono-energia"/>                            
                            <Card.Title  className="texto-card">Estudio Energético</Card.Title>
                            <Card.Text>
                                Analizamos tu consumo y la radiación solar de tu zona para diseñar la solución más eficiente. Calculamos la potencia óptima y el ahorro antes de la instalación.
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="shadow position-relative overflow-hidden">
                        <img src={Icono2} className="marca-agua"></img>
                        <Card.Body>
                            <LiaCertificateSolid className="icono-card icono-certificada"/>
                            <Card.Title className="texto-card">Instalación Certificada</Card.Title>
                            <Card.Text>
                                Instalación profesional realizada por técnicos acreditados ante la SEC. Cumplimos con todas las normas eléctricas para un sistema confiable y duradero.
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="shadow position-relative overflow-hidden">
                        <img src={Icono4} className="marca-agua"></img>
                        <Card.Body>
                            <TbDeviceAnalytics className="icono-card icono-monitoreo"/>
                            <Card.Title className="texto-card">Monitoreo</Card.Title>
                            <Card.Text>
                                Supervisa el rendimiento de tus paneles en tiempo real desde cualquier dispositivo. Recibe alertas y reportes automáticos para mantener la eficiencia energética.
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="shadow position-relative overflow-hidden">
                        <img src={Icono3} className="marca-agua"></img>
                        <Card.Body>
                            <BsTools className="icono-card icono-mantencion"/>
                            <Card.Title className="texto-card">Mantención</Card.Title>
                            <Card.Text>
                                Ofrecemos los mejores planes de limpieza y revisión periódica para garantizar la máxima producción y extender la vida útil de todos tus equipos solares.
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default CardServicios;

