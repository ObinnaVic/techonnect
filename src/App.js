import './App.css';
import Home from './components/Home';
import ServiceContent from "./components/ServiceContent";
import TeamProfile from "./components/TeamProfile";
import Nav from "./components/Nav"
import Error from "./components/Error"
import { Route, Routes } from 'react-router-dom';
import MobileNav from './components/MobileNav';
import { useState } from 'react';
import Footer from './components/Footer';
import Contact from './components/Contact';
import MobileHead from './components/MobileHead';

function App() {
  const [mobileNav, setMobileNav] = useState(false);
   
  return (
    <>
      <Nav />
      <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <Routes>
        <Route path="/" element={<MobileHead setMobileNav={setMobileNav} />}>
          <Route index element={<Home />} />
          <Route path="/team" element={<TeamProfile />} />
          <Route path="/service" element={<ServiceContent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
