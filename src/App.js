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

function App() {
  const [mobileNav, setMobileNav] = useState(false);
   
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
          }
        >
          <Route index element={<Home setMobileNav={setMobileNav} />} />
          <Route path="Team" element={<TeamProfile />} />
          <Route path="Service" element={<ServiceContent />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
