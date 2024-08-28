import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Join from './pages/Join';
import Donate from './pages/Donate';
import Panel from './pages/Panel';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-20 px-2 min-h-[calc(100vh-50px)]'>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/join' element={<Join />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/panel' element={<Panel />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
