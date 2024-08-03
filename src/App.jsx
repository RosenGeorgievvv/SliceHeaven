import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Menu from './pages/Menu';

function App() {

  return (
    <div className='app'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
