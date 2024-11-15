import './App.css';

// 1-Config React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 3-Componentes
import Navbar from './components/Navbar';

// 2-Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'

import AppProvider from './contexts/AppProvider';

function App() {

  return (
    <div className="App">
      <h1>Context API</h1>
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
