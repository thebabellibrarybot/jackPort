
import React, { useState } from 'react';

import Pic from '../Vector 1.png';
import SlideToggle from './slideToggle';



const Svg = () => {


    const [visible, setVisible] = useState(false);

    function onoffClick() {
        setVisible(!visible)
    }
    
    return (
        <div className = 'svg1'>
            
            <img src = {Pic} alt = 'one' onClick={onoffClick}/>
            <div className={visible ? 'homeicons' : 'invisible'}>
                <div className='slide'>
                <SlideToggle/>
                </div>
            </div>
        </div>
    )

}



export default Svg