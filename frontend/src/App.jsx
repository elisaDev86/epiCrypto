import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Importa le pagine
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CryptoPage from './pages/CryptoPage/CryptpPage'; 
import DeleteUser from './pages/DeleteUser/DeleteUser';

// Importa i componenti
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/Home';
import Cryptolist from './components/CryptoList/CryptoList';

import SitiUtili from './pages/SitiUtili/SitiUtili';
import StrumentiOperativi from './pages/StrumentiOperativi/StrumentiOperativi';
import DiscoverDefi from './pages/DiscoverDefi/DiscoverDefi';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/crypto/:id" element={<CryptoPage />} />
        <Route path="/crypto-list" element={<Cryptolist />} />
        <Route path="/delete-user" element={<DeleteUser />} />
        <Route path="/siti-utili" element={<SitiUtili />} />
        <Route path="/strumenti-operativi" element={<StrumentiOperativi />} />
        <Route path="/discover-defi" element={<DiscoverDefi/>} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
