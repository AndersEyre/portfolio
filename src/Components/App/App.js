import React from 'react';

import { Nav } from '../Nav/nav';
import { Project } from '../Project/project';
import './App.css';
import '../Nav/nav.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      projects:[
        {
          id:1,
          img: '//img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/wibbitz/wbz-what-to-do-about-hairballs-in-cats.jpg',
          codepen: 'codepen.io',
          github: 'github.com',
        }
      ]
    };
  
  }

  
  render(){
    return (
      <div>
        <Nav/>
        <div className='app'>
          
          <div className='background-img' id='top-background-img'>  
            <h1>AE</h1>
            <p>Development Done Differently.</p>
            <img src={require('./Portfolio/dani thump.jpg')} alt='background'/>
          </div>

          <div className='background-img' id='about'>
            <Project/>
            <img src={require('./Portfolio/Cover photo.jpg')} alt='background'/>
          </div>

          <div className='background-img' id='projects'>
            <img src={require('./Portfolio/Spain cover.jpg')} alt='background'/>
          </div>

          <div className='background-img' id='contact'>
            <img src={require('./Portfolio/Once more into the breach.jpg')} alt='background' />
          </div>

        </div>
      </div>
    );
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('nav-bar').style.top = '0';
  } else {
    document.getElementById('nav-bar').style.top = '-60px';
  }
  prevScrollpos = currentScrollPos;
}

export default App;
