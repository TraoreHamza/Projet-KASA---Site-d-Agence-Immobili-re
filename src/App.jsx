import { BrowserRouter, Routes, Route} from 'react-router';
import Home from './pages/Home';
import Logement from './pages/Logement';
import D_404 from './pages/D_404';
import D_A_Propos from './pages/D_A_Propos';

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
