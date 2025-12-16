import React from 'react';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Problems from './components/Problems';
import NoResults from './components/NoResults';
import Services from './components/Services';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      <Hero />
      <Solutions />
      <Problems />
      <NoResults />
      <Services />
      <LeadForm />
      <Footer />
    </main>
  );
}

export default App;