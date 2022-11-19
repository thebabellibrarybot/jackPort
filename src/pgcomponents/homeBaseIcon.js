import React, { useState } from 'react';

import PicDark from '../Vector 1.png';
import PicLight from '../Vector 1 light.png'
import SlideToggle from './slideToggle';
import useTheme from '../hooks/useTheme';



const Svg = () => {

    const { isDarkMode } = useTheme();
    const [visible, setVisible] = useState(false);

    function onoffClick() {
        setVisible(!visible)
    }

    const pic = (isDarkMode ? PicLight : PicDark)
    
    return (
        <div className= {isDarkMode ? 'light' : 'dark'} >
        <div className = 'svg1'>
            
            <img src = {pic} alt = 'one' onClick={onoffClick}/>
            <div className={visible ? 'homeicons' : 'invisible'}>
                <div className='slide'>
                <SlideToggle/>
                </div>
            </div>

        </div>
        </div>
    )

}



export default Svg