import React, { useState } from 'react';
import './CalculadoraIntegral.css'; // asegúrate de que el archivo existe

function CalculadoraIntegral() {

    const [potenciaPanel, setPotenciaPanel] = useState(0);
    const [cantidadPaneles, setCantidadPaneles] = useState(0);
    const [inversor, setInversor] = useState(0);
    const [bateria, setBateria] = useState(0);
    const [cantidadBaterias, setCantidadBaterias] = useState(0);
    const [estructura, setEstructura] = useState(0);
    const [instalacionBase, setInstalacionBase] = useState(0);
    const [pesoEnvio, setPesoEnvio] = useState(0);

    //variables con opciones fijas
    const [tipoTecho, setTipoTecho] = useState('');
    const [region, setRegion] = useState('');
    const [complejidad, setComplejidad] = useState('');
    const [subsidio, setSubsidio] = useState('');
    const [metodoEnvio, setMetodoEnvio] = useState('');
    const [garantia, setGarantia] = useState('');
    const [planPago, setPlanPago] = useState('');
    const [tipoPie, setTipoPie] = useState('');
    const [valorPie, setValorPie] = useState('');


    //boton para reiniciar los campos

    function reiniciarCampos() {
        setPotenciaPanel(0);
        setCantidadPaneles(0);
        setInversor(0);
        setBateria(0);
        setCantidadBaterias(0);
        setEstructura(0);
        setInstalacionBase(0);
        setPesoEnvio(0);

        setTipoTecho('');
        setRegion('');
        setComplejidad('');
        setSubsidio('');
        setMetodoEnvio('');
        setGarantia('');
        setPlanPago('');
        setTipoPie('');
        setValorPie('');
    }



    //variables con porcentajes directo

    const potenciaPanelNumero = parseInt(potenciaPanel);
    const cantidadPanelesNumero = parseInt(cantidadPaneles);
    const inversorNumero = parseInt(inversor);
    const bateriaNumero = parseInt(bateria);
    const cantidadBateriasNumero = parseInt(cantidadBaterias);
    const estructuraNumero = parseInt(estructura);
    const instalacionBaseNumero = parseInt(instalacionBase);
    const pesoEnvioNumero = parseInt(pesoEnvio);

    // variable con las opciones SELECT
    const tipoTechoNumero = parseInt(tipoTecho);
    const regionNumero = parseInt(region);
    const complejidadNumero = parseInt(complejidad);
    const subsidioNumero = parseInt(subsidio);
    const metodoEnvioNumero = parseInt(metodoEnvio);
    const garantiaNumero = parseInt(garantia);
    const planPagoNumero = parseInt(planPago);
    const tipoPieNumero = parseInt(tipoPie);
    const valorPieNumero = parseInt(valorPie);

    // PORCENTAJES Y FACTORES FIJOS
    const porcentajeTeja = 0.05;
    const porcentajeZinc = 0.02;
    const porcentajeHormigon = 0.07;

    const porcentajeBaja = 0.00;
    const porcentajeMedia = 0.08;
    const porcentajeAlta = 0.15;

    const porcentajeResidencial = -0.08;
    const porcentajePyme = -0.05;

    const garantia12 = 0.02;
    const garantia24 = 0.04;
    const garantia36 = 0.06;
    const garantia06 = 0;

    const tasa6 = 0.012;
    const tasa12 = 0.011;
    const tasa24 = 0.010;

    const ivaPorcentaje = 0.19;


    //Variables de Resultado


    // 1. Potencia estimada (kW)
    const potenciaEstimada = (potenciaPanelNumero * cantidadPanelesNumero) / 1000;

    // 2. Subtotal de equipos
    const subtotalEquipos = inversorNumero + (bateriaNumero * cantidadBateriasNumero) + estructuraNumero;

    // 3. Recargo por tipo de techo
    const recargoTecho =
        tipoTechoNumero == 1 ? subtotalEquipos * porcentajeTeja :
            tipoTechoNumero == 2 ? subtotalEquipos * porcentajeZinc :
                tipoTechoNumero == 3 ? subtotalEquipos * porcentajeHormigon : 0;

    // 4. Subsidio aplicado
    const descuentoSubsidio =
        subsidioNumero == 2 ? subtotalEquipos * porcentajeResidencial :
            subsidioNumero == 3 ? subtotalEquipos * porcentajePyme : 0;

    // 5. Instalación final según complejidad
    const instalacionFinal =
        complejidadNumero == 1 ? instalacionBaseNumero + (instalacionBaseNumero * porcentajeBaja) :
            complejidadNumero == 2 ? instalacionBaseNumero + (instalacionBaseNumero * porcentajeMedia) :
                complejidadNumero == 3 ? instalacionBaseNumero + (instalacionBaseNumero * porcentajeAlta) : instalacionBaseNumero;

    // 6. IVA (19%)
    const iva19Total = (subtotalEquipos + recargoTecho + descuentoSubsidio + instalacionFinal) * ivaPorcentaje;

    // 7. Envío base por región
    const costoBaseRegion =
        regionNumero == 7 ? 5000 :            // RM Santiago
            regionNumero >= 1 && regionNumero <= 6 ? 9000 :   // Norte
                regionNumero >= 8 && regionNumero <= 14 ? 10000 : // Sur
                    regionNumero >= 15 && regionNumero <= 16 ? 15000 : 0;

    // 8. Total de envío (según método y peso)
    const envioNormal = costoBaseRegion + (pesoEnvioNumero * 700);
    const totalEnvio =
        metodoEnvioNumero == 1 ? envioNormal :
            metodoEnvioNumero == 3 ? envioNormal * 1.2 : envioNormal;

    // Garantía extendida
    const totalGarantia =
        garantiaNumero == 1 ? subtotalEquipos * garantia06 :
            garantiaNumero == 2 ? subtotalEquipos * garantia12 :
                garantiaNumero == 3 ? subtotalEquipos * garantia24 :
                    garantiaNumero == 4 ? subtotalEquipos * garantia36 : 0;

    //Total antes de financiar
    const totalAntesDeFinanciar =
        subtotalEquipos + recargoTecho + descuentoSubsidio + instalacionFinal + iva19Total + totalEnvio + totalGarantia;

    // Pie (según tipo)
    const pieTotal =
        tipoPieNumero == 1 ? (totalAntesDeFinanciar * (valorPieNumero / 100)) :
            tipoPieNumero == 2 ? valorPieNumero : 0;

    // Monto a financiar
    const montoFinanciar = totalAntesDeFinanciar - pieTotal;

    // 13. Interés total según plan
    const interesTotal =
        planPagoNumero == 2 ? montoFinanciar * tasa6 * 6 :
            planPagoNumero == 3 ? montoFinanciar * tasa12 * 12 :
                planPagoNumero == 4 ? montoFinanciar * tasa24 * 24 : 0;

    // 14. Cuota mensual (si aplica)
    const cuotaAPagar =
        planPagoNumero == 2 ? (montoFinanciar + interesTotal) / 6 :
            planPagoNumero == 3 ? (montoFinanciar + interesTotal) / 12 :
                planPagoNumero == 4 ? (montoFinanciar + interesTotal) / 24 : montoFinanciar;

    // 15. Total final
    const totalFinal = montoFinanciar + interesTotal + pieTotal;





    return (
        <div className="calculadora-bg py-5">
            <div className="container">

                {/* ENCABEZADO */}
                <div className="row mb-5">
                    <div className="col-lg-12 text-center bg-primary-subtle text-dark rounded py-3 shadow-sm">
                        <h2 className="fw-bold">DEMO Calculadora</h2>
                    </div>
                </div>

                {/* BLOQUES PRINCIPALES */}
                <div className="row justify-content-center">

                    {/* BLOQUE IZQUIERDO: FORMULARIO */}
                    <div className="col-lg-6 calculadora-card me-lg-3 mb-4">
                        <h4 className="text-center mb-4 text-dark">Formulario</h4>

                        <div className="row">
                            {/* Columna izquierda del formulario */}
                            <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <label className="form-label">Potencia Panel (W)</label>
                                    <input className="form-control" value={potenciaPanel} onChange={(e) => setPotenciaPanel(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Inversor (Precio)</label>
                                    <input className="form-control" value={inversor} onChange={(e) => setInversor(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Cantidad Baterías</label>
                                    <input className="form-control" value={cantidadBaterias} onChange={(e) => setCantidadBaterias(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Instalación Base</label>
                                    <input className="form-control" value={instalacionBase} onChange={(e) => setInstalacionBase(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Tipo de Techo</label>
                                    <select className="form-select" value={tipoTecho} onChange={(e) => setTipoTecho(e.target.value)}>
                                        <option>Seleccione un Tipo</option>
                                        <option value={1}>Teja/Asfalto (+5%)</option>
                                        <option value={2}>Zinc/Planchas (+2%)</option>
                                        <option value={3}>Hormigón (+7%)</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Complejidad Instalación</label>
                                    <select className="form-select" value={complejidad} onChange={(e) => setComplejidad(e.target.value)}>
                                        <option>Seleccione un Tipo</option>
                                        <option value={1}>Baja (0%)</option>
                                        <option value={2}>Media (+5%)</option>
                                        <option value={3}>Alta (+10%)</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Metodo de Envio</label>
                                    <select className="form-select" value={metodoEnvio} onChange={(e) => setMetodoEnvio(e.target.value)}>
                                        <option>Seleccione un Tipo</option>
                                        <option value={1}>Estandar (x1.0)</option>
                                        <option value={3}>Express (x1.2)</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Plan de Pago</label>
                                    <select className="form-select" value={planPago} onChange={(e) => setPlanPago(e.target.value)}>
                                        <option>Seleccione un Tipo</option>
                                        <option value={1}>Contado -> tasa 0, Cuotas 1 </option>
                                        <option value={2}>6 Cuotas -> 1.2% mensual</option>
                                        <option value={3}>12 Cuotas -> 1.1% mensual</option>
                                        <option value={3}>24 Cuotas -> 1.0% mensual</option>
                                    </select>
                                </div>
                                <div className="form-group mt-3">
                                    <label className="form-label">Valor Pie</label>
                                    <input className="form-control" value={valorPie} onChange={(e) => setValorPie(e.target.value)} />
                                    <small className="text-muted">Si es 10 = 10%</small>
                                </div>

                                

                            </div>

                            {/* Columna derecha del formulario */}
                            <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <label className="form-label">Cantidad de Paneles</label>
                                    <input className="form-control" value={cantidadPaneles} onChange={(e) => setCantidadPaneles(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Batería (Precio Unidad)</label>
                                    <input className="form-control" value={bateria} onChange={(e) => setBateria(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Estructura/Cableado</label>
                                    <input className="form-control" value={estructura} onChange={(e) => setEstructura(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Peso Envío (Kg)</label>
                                    <input className="form-control" value={pesoEnvio} onChange={(e) => setPesoEnvio(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Región</label>
                                    <select className='form-select' id="region" name='region' value={region} onChange={(e) => setRegion(e.target.value)}>
                                        <option>Seleccione un Tipo</option>
                                        <option value={1}>Región de Arica y Parinacota ($9.000)</option>
                                        <option value={2}>Región de Tarapacá ($9.000)</option>
                                        <option value={3}>Región de Antofagasta ($9.000)</option>
                                        <option value={4}>Región de Atacama ($9.000)</option>
                                        <option value={5}>Región de Coquimbo ($9.000)</option>
                                        <option value={6}>Región de Valparaíso ($9.000)</option>
                                        <option value={7}>RM Santiago ($5.000)</option>
                                        <option value={8}>Región de O'Higgins ($10.000)</option>
                                        <option value={9}>Región del Maule ($10.000)</option>
                                        <option value={10}>Región de Ñuble ($10.000)</option>
                                        <option value={11}>Región del Biobío ($10.000)</option>
                                        <option value={12}>Región de La Araucanía ($10.000)</option>
                                        <option value={13}>Región de Los Ríos ($10.000)</option>
                                        <option value={14}>Región de Los Lagos ($10.000)</option>
                                        <option value={15}>Región de Aysén ($10.000)</option>
                                        <option value={16}>Región de Magallanes y de la Antártica Chilena ($15.000)</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Subsidio</label>
                                    <select className="form-select" value={subsidio} onChange={(e) => setSubsidio(e.target.value)}>
                                        <option>Seleccione un Tipo</option>
                                        <option value={1}>Sin Subsidio (0%)</option>
                                        <option value={2}>Residencial (-8%)</option>
                                        <option value={3}>Pyme (-5%)</option>
                                    </select>
                                </div>
                                <div className='form-group mt-4'>
                                    <label className='form-label' htmlFor='garantia'>Garantía</label>
                                    <select className='form-select' id="garantia" name='garantia' value={garantia} onChange={(e) => setGarantia(e.target.value)}>
                                        <option>Seleccione un Tipo</option>
                                        <option value={1}>Garantia sin costo de 6 meses</option>
                                        <option value={2}>12 meses(+2% subtotal equipos)</option>
                                        <option value={3}>24 meses(+4%)</option>
                                        <option value={4}>36 meses(+6%)</option>
                                    </select>
                                </div>
                                <div className='form-group mt-4'>
                                    <label className='form-label' htmlFor='tipoPie'>Tipo de Pie</label>
                                    <select className='form-select' id="tipoPie" name='tipoPie' value={tipoPie} onChange={(e) => setTipoPie(e.target.value)}>
                                        <option>Seleccione un Tipo</option>
                                        <option value={1}>Porcentaje</option>
                                        <option value={2}>Monto Fijo</option>
                                    </select>
                                </div>
                                <div className='form-group mt-5'>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BLOQUE DERECHO: RESUMEN */}
                    <div className="col-lg-5 calculadora-card mb-4">
                        <h4 className="text-center mb-4 text-dark">Resumen</h4>

                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Potencia Estimada (kW)</td>
                                    <td>${potenciaEstimada.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Subtotal Equipos</td>
                                    <td>${subtotalEquipos.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Recargo Techo</td>
                                    <td>${recargoTecho.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Subsidio</td>
                                    <td>${descuentoSubsidio.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Instalación Final</td>
                                    <td>${instalacionFinal.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>IVA 19%</td>
                                    <td>${iva19Total.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Envío</td>
                                    <td>${totalEnvio.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Garantía</td>
                                    <td>${totalGarantia.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Total Antes de Financiar</td>
                                    <td>${totalAntesDeFinanciar.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Pie</td>
                                    <td>${pieTotal.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Interés Total</td>
                                    <td>${interesTotal.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Cuota</td>
                                    <td>${cuotaAPagar.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td><strong>Total Final</strong></td>
                                    <td><strong>${totalFinal.toLocaleString()}</strong></td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="text-muted small text-center mt-2">
                            Valores referenciales para producto requerido por el cliente
                        </p>
                    </div>

                    <div>
                        <button className="btn btn-info reiniciar-btn" onClick={reiniciarCampos}>
                                    Reiniciar
                                </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CalculadoraIntegral;

