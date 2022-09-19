import React from 'react'
import { BrowserRouter as Router, Route, Routes} from  'react-router-dom';

import Nav from './pgcomponents/nav';
import Home from './components/home';
import BabPort from './components/babPort';



function App() {
  return (
    <Router>
      <div className='app'>

        <Nav/>

        <div className='content'>
          
          <Routes>
            <Route path = "/" element = {<Home/>}/>
          </Routes>


          <Routes>
            <Route path = "/babport" element = { <BabPort/> }/>
          </Routes>



          
        </div>
      </div>
    </Router>
    );
}

export default App;