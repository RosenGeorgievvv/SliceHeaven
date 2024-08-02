import React from 'react'
import '../styles/Home.css';
import pizza from '../assets/pizza.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${pizza})`}}>
        <div className='container'>
            <h1>Food & Taste Pizzeria</h1>
            <p>PIZZA TO FIT ANY TASTE</p>
            <Link to='/menu'>
                <button className='orderBtn'> ORDER NOW </button>
            </Link>
        </div>
    </div>
  )
}

export default Home