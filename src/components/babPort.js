
import React from 'react';

import '../styles/bab.css';
import Nav from '../pgcomponents/nav';


const babPort = () => {
    
    return (
        <div className = 'content'>
            <div className='babLoad'>
            </div>
            <Nav/>
            <div className='babHome'>
                <p>babhome</p>
                <button onClick={()=> {console.log('clicked')}}>
                clickme
                </button>
            </div>
            
        </div>
    )

}



export default babPort