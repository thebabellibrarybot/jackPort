import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/home.css'

const Home = () => {

    const navigate = useNavigate();
    
    return (
    <div className='home'>
        <div className='btns'>
            <div className='out' id = 'o1'><span><p onClick={() => navigate("/lionport")}>lionPort</p></span></div>
            <div className='out' id = 'o2'><span><p onClick={() => navigate("/babport")}>babPort</p></span></div> 
            <div className='out' id = 'o3'><span><p onClick={() => navigate("/hmfasport")}>hmfasPort</p></span></div> 
            <div className='out' id = 'o4'><span><p onClick={() => navigate("/tacport")}>tacPort</p></span></div> 
            <div className='out' id = 'o5'><span><p onClick={() => navigate("/bhgport")}>bhgPort</p></span></div> 
            <div className='out' id = 'o6'><span><p><a href="https://github.com/thebabellibrarybot/" target="_blank" rel="noreferrer">gitHubPort</a></p></span></div> 
        </div>
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