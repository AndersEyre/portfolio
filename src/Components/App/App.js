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

          <div className='background-img'>  
            <h1>AE</h1>
            <p>Development Done Differently.</p>
            <img src={require('./Portfolio/dani thump.jpg')} alt='background'/>
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
    document.getElementById('nav-bar').style.top = '-60px';
  }
  prevScrollpos = currentScrollPos;
}

export default App;
