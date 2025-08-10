import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Specialties from './components/Specialties';
import About from './components/About';
import Team from './components/Team';
import Facilities from './components/Facilities';
import Emergency from './components/Emergency';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Specialties />
      <About />
      <Team />
      <Facilities />
      <Emergency />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;