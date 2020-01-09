import React from 'react';
import Banner from './components/banner'
import './CSS/App.css'
import Main from './components/Main';
import Profile_component from './components/Profile_component';
import Protfolio_component from './components/Protfolio_component';
import Contact from './components/Contact';
import Headroom from 'react-headroom';



function App() {
  return (
    
    <div className='center'>
  
      <Headroom>
  
    <Banner></Banner>

    
    <Main></Main>
    
    <Profile_component></Profile_component>
    <Protfolio_component></Protfolio_component>
    <Contact></Contact>
    </Headroom>
    </div>
    
    
  );
}

export default App;
