import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Soluciones from './components/Soluciones';
import Calculadora from './components/CalculadoraIntegral';
import Planes from './components/Planes';
import Testimonios from './components/Testimonios';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import Footer from './components/Footer';


function App() {
  return (
    <div className="">
      <Navbar/>
      <div className="container">        
        <Hero/>
        <section id='servicios'>
          <Servicios/>
        </section>           
        <section id='soluciones'>
          <Soluciones/>
        </section>        
        <section id='demo-calculadora' className='py-5 bg-light'>
          <div className='container'>
            <Calculadora/>
          </div>
        </section>
        <section id='planes'>
          <Planes/>
        </section>   
        <section id='testimonios'>
          <Testimonios/>
        </section>  
        <section id='faqs'>
          <FAQ/>
        </section>        
      </div>
      <section id='footer'>
          <Footer/>
        </section>
    </div>
  );
}

export default App;


