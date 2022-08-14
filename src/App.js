import './styles/style.scss';
import Erreur_404 from './pages/Erreur_404';
import Home from './pages/Home';
import Logements from './pages/Logement';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Header />
          <Routes>
              <Route path='/' exact element={<Home />}/>
              <Route path='about' exact element={<About />}/>
              <Route path='fiche_logement' exact element={<Logements />}/>
              <Route path='*' element={<Erreur_404 />}/>
          </Routes>
        </BrowserRouter> 
      <Footer />
    </div>
  );
}

export default App;


