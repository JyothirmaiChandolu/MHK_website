import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { WhoWeAre } from './pages/WhoWeAre';
import { WhatWeDo } from './pages/WhatWeDo';
import { Products } from './pages/Products';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Events } from './pages/Events';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/products" element={<Products />} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}