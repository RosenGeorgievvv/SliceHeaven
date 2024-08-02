import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';

function App() {

  return (
    <div className='app'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
