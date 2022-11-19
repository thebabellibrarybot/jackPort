import React , { useContext, useState }from 'react';
import ReactSwitch from 'react-switch';

import {ThemeContext} from '../App';

import "../components/scss/_main.scss";

const SlideToggle = () => {


    
    const  {isDarkMode}  = useContext(ThemeContext);
    const {toggleDarkMode} = useContext(ThemeContext);
    console.log(isDarkMode, 'from slider')
    const [checked, setChecked] = useState(false)
    console.log(checked, 'from slider')

    function switchTheme () {
        
        toggleDarkMode()
        setChecked(curr => !curr);
        
    }

    return (
    <div className={isDarkMode ? 'light':'dark'}>
    <div className='switch'>
        <p className='txt'>mode: {isDarkMode ? 'light' : 'dark'}</p>
        <ReactSwitch onChange={switchTheme} checked={checked}/>
    </div>
    </div>
    )

}

export default SlideToggle