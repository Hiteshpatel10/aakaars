import './App.css';
import { BrowserRouter as Router, Redirect, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar'
import Home from './pages/home'
import Contacts from './pages/contacts'
import About from './pages/about'
import ProductList from './components/products/productList'
import DetailProductPage from './components/products/DetailProductPage/DetailProductPage'
import UploadPortal from './components/UploadPortal'

function App() {
  return (
    <Router>
      <NavBar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<UploadPortal />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/productList' element={<ProductList />} />
          <Route path='/productList/productDetail' element={<DetailProductPage />} />
        </Routes>
      </main>

      <footer>
        <Contacts />
      </footer>
    </Router>
  );
}

export default App;
