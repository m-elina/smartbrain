import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './SmartBrain-logo.png';

const Logo = () => {
    return (
        <div className='ma4 mt0' style={{display: 'flex', justifyContent: 'flex-start'}}>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '15px'}} src={brain} alt='logo' /> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;