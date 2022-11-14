import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

//import Nav from '../pgcomponents/nav';
import SVG from '../pgcomponents/svg2';
import Svg from '../pgcomponents/homeBaseIcon';
import ListObj from '../pgcomponents/ListObj';
import '../styles/main.css'

const Home = () => {

    //const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    function onoffClick() {
        setVisible(!visible)
    }
    


    return (
    <div className='homepage'>
    
        <div className='welcomebar'>

            <div className='mainbar'>
                <h1 onClick={onoffClick}>Welcome</h1>
                <div className='prof'>
                    <Svg/>
                </div>
            </div>

            <div class = {visible ? 'listobj' : 'invisible'}>
                <ListObj/>
            </div>

        </div>
    

        <SVG/>
    
    </div>
    )

}



export default Home



/* bib 

load animations: 
https://stackoverflow.com/questions/51939788/how-to-trigger-react-transitiongroup-and-transition-to-animate-onload
https://medium.com/@davidfalconbernhard/how-to-animate-once-on-page-load-in-react-js-e357fd899a4b

http://reactcommunity.org/react-transition-group/transition

change favicon: 
https://noaheakin.medium.com/changing-the-default-react-browser-tab-title-and-icon-1240239d92d3
https://www.thewindowsclub.com/how-to-make-an-icon-for-windows-10
https://www.xiconeditor.com/


Port inspo: 
https://www.youtube.com/watch?v=bmpI252DmiI


Hide a Div:
https://www.w3docs.com/snippets/html/how-to-create-a-hidden-div-without-a-line-break-or-horizontal-space.html#:~:text=Add%20a%20%3Cdiv%3E%20element%20with%20the%20id%20attribute,the%20display%20property%20to%20%E2%80%9Cnone%E2%80%9D%20for%20the%20%E2%80%9Chide%E2%80%9D.







*/ 