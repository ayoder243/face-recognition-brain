import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className='tiltDiv br2 shadow-2' style={{ height: '150px', width: '150px' }}>
	      <div>
	        <img src={brain} alt='logo' />
	      </div>
    	</Tilt>
		</div>
	);
}

export default Logo;