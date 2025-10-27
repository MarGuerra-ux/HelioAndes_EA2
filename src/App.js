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
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import FAQs from './components/FAQ';


function App() {
  return (
    <div className="">
      <div className="container">
        <Navbar/>
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
          <FAQs/>
        </section>  
      </div>
    </div>
  );
}

export default App;
