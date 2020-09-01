import React from 'react';

import { Nav } from '../Nav/nav';
import { ProjectList } from '../ProjectList/projectList'
import './App.css';
import '../Nav/nav.css';
import { ContactForm } from '../ContactForm/ContactForm';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      projects:[
        {
          id:1,
          img: '//img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/wibbitz/wbz-what-to-do-about-hairballs-in-cats.jpg',
          name: 'Proxy project',
          codepen: 'https://codepen.io/',
          github: 'https://github.com/',
        },
        {
          id: 2,
          img: '//img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/wibbitz/wbz-what-to-do-about-hairballs-in-cats.jpg',
          name: 'Proxy project',
          codepen: 'https://codepen.io/',
          github: 'https://github.com/',
        },
        {
          id: 3,
          img: '//img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/wibbitz/wbz-what-to-do-about-hairballs-in-cats.jpg',
          name: 'Proxy project',
          codepen: 'https://codepen.io/',
          github: 'https://github.com/',
        },
        
      ]
    };
  
  }

  
  render(){
    return (
      <div className='app'>
          <Nav/>

          <div className='background-img' id='about'>  
            <div className='about-image'>
              <img src={require('./Portfolio/stockholm-2.jpg')} alt='background'/>
              <div class="block"></div>
            </div>
            <div className='greeting'>
              <h1>WHATS UP!!</h1>
              <p>My name is Anders Eyre and im a developer from Melbourne Australia.</p>
            </div>
          </div>

          <ProjectList projects={this.state.projects}/>

          <ContactForm/>

        

        </div>
      
    );
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('nav-bar').style.top = '0px';
  } else {
    document.getElementById('nav-bar').style.top = '-240px';
  }
  prevScrollpos = currentScrollPos;
}

export default App;
