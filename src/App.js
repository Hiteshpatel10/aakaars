import './App.css';
import { BrowserRouter as Router, Redirect, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar'
import Home from './pages/home'
import Contacts from './pages/contacts'
import About from './pages/about'

function App() {
  return (
    <Router>
      <NavBar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contacts />} />
        </Routes>
      </main>

      <footer>
        <Contacts />
      </footer>
    </Router>
  );
}

export default App;
