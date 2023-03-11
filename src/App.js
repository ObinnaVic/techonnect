import './App.css';
import Home from './components/Home';
import ServiceContent from "./components/ServiceContent";
import TeamProfile from "./components/TeamProfile";
import Nav from "./components/Nav"
import Error from "./components/Error"
import { Route, Routes } from 'react-router-dom';

function App() {
   
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="Team" element={<TeamProfile />} />
          <Route path="Service" element={<ServiceContent />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
