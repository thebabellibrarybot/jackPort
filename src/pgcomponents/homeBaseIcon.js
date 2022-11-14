
import React, { useState } from 'react';

import Pic from '../Vector 1.png';
import SlideToggle from './slideToggle';



const Svg = () => {

    const [visible, setVisible] = useState(false);

    function onoffClick() {
        setVisible(!visible)
    }
    
    return (
        <div className = 'svg1' onClick={onoffClick}>
            
            <img src = {Pic} alt = 'one'/>
            <div className={visible ? 'homeicons' : 'invisible'}>
                <p>icon</p>
                <SlideToggle/>
            </div>
        </div>
    )

}



export default Svg