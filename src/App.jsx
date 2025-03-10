import { BrowserRouter, Routes, Route} from 'react-router';
import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';
import D_404 from './pages/NatFound/NotFound';
import D_A_Propos from './pages/About/About';

import './assets/styles.css'

// Créer un composant App
function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/logement/:identifiant" element ={<Logement/>} />
      <Route path="*" element ={<D_404/>} />
      <Route path="/a_propos/" element ={<D_A_Propos/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
