import React from 'react';

import nav, { Nav } from '../Nav/nav';
import './App.css';
import '../Nav/nav.css';

function App() {
  return (
    
    <div className="App">
      <Nav/>
      <header className="App-header">
        <div className='backgroundImg' id="topbackgroundImg">
          
          <h1 >AE</h1>
          <p style={{
            fontSize: 18,
            color: 'black',
            left: 634,
          }
          }>Development Done Differently.</p>
          <p >Development Done Differently.</p>
        <img  src={require("./Portfolio/dani thump.jpg")} />
        </div>
        <div className='backgroundImg' id='about'>
        <img  src={require("./Portfolio/Cover photo.jpg")} />
        </div>
        <div className='backgroundImg' id='projects'>
        <img  src={require("./Portfolio/Spain cover.jpg")} />
        </div>
        <div className='backgroundImg' id='contact'>
        
        <img  src={require("./Portfolio/Once more into the breach.jpg")} />
        </div>
      </header>
    </div>
  );
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

export default App;
