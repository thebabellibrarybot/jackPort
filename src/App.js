import React from 'react'
import { BrowserRouter as Router, Route, Routes} from  'react-router-dom';

import Home from './components/home';
import BabPort from './components/babPort';
import LionPort from './components/LiandUnPort';
import BhgPort from './components/bhgPort';


function App() {
  return (
    <Router>
      <div className='app'>

        <div className='content'>
          
          <Routes>
            <Route path = "/" element = {<Home/>}/>
          </Routes>


          <Routes>
            <Route path = "/babport" element = { <BabPort/> }/>
            <Route path = "/lionport" element = { <LionPort /> }/>
            <Route path = "/bhgport" element = { <BhgPort/> }/>
          </Routes>




          
        </div>
      </div>
    </Router>
    );
}

export default App;