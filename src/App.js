import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import ProductDetail from './Components/Pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
