import React from 'react';
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon className='instagram' />
                <FacebookIcon className='facebook' />
            </div>
            <p><b>&copy; 2023 <Link to="#" style={{textDecoration: 'none', color: 'white'}}>sliceheaven.com</Link></b></p>
        </div>
    )
}

export default Footer