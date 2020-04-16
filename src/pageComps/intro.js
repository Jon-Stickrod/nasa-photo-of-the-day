import React from 'react';
import NasaLogo from './NasaLogo.png';

function IntroGreet() {
    return(
        <div>
	        <img src={NasaLogo} alt="" className="nasa-logo"/>
	        <p>We are NASA</p>
        </div>
    );
}

export default IntroGreet;