import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import About from './pages/About';
import Login from './pages/Login';

function App() {

  return (
    <div className='app'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
