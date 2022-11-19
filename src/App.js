import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from  'react-router-dom';

import Home from './components/home';
import BabPort from './components/babPort';
import LionPort from './components/LiandUnPort';
import BhgPort from './components/bhgPort';

//import ThemeProvider from './context/themeProvider';

export const ThemeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode, 'is darkmode')
  const toggleDarkMode = () => {
    setIsDarkMode(curr => !curr)
  };

  return (
      <div className='app'>
        <ThemeContext.Provider value = {{ isDarkMode, toggleDarkMode }}>
        <div className='content'>
        <Router>
          
          <Routes>
            <Route path = "/" element = {<Home/>}/>
          </Routes>


          <Routes>
            <Route path = "/babport" element = { <BabPort/> }/>
            <Route path = "/lionport" element = { <LionPort /> }/>
            <Route path = "/bhgport" element = { <BhgPort/> }/>
          </Routes>


          </Router>
        </div>
        </ThemeContext.Provider >
      </div>
    );
}

export default App;