import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MsliderSection from './components/MsliderSection';
import ServicesSection from './components/ServicesSection';
import SelectSection from './components/SelectSection';
import NewsSection from './components/NewsSection';

import './styles/App.scss';


const App = () => {
  return (
    <div className="App">
      <Header />  
      <div className="main">
        <MsliderSection />
        <ServicesSection />
        <SelectSection />
        <NewsSection />
      </div>
      <Footer />  
    </div>
  );
}

export default App;
