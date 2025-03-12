import { BrowserRouter, Routes, Route} from 'react-router';
import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';
import NotFound from './pages/NatFound/NotFound';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

import './global.css'

// Créer un composant App
function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/logement/:identifiant" element ={<Logement/>} />
      <Route path="*" element ={<NotFound/>} />
      <Route path="/a_propos/" element ={<About/>} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App
