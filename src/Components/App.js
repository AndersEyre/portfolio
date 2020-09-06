import React from 'react';
import { Nav } from './nav';
import { ProjectList } from './projectList'
import { Contact } from './contact';
import { Footer } from './footer'
import '../Styles/App/App.css';

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
      <main className='app'>
        <Nav/>
        <div className='about-section' id='about'>  
          <div className='about-image'>
            <img src={require('../Styles/App/Images/Stockholm-small.jpg')} alt='background'/>
          </div>
          <div className='greeting'>
            <h1>Greetings Friend!</h1>
            <p>Im Anders Eyre. <br/> A developer based in Melbourne, Australia.</p>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noopener noreferrer'><p className='resume'>Resume</p></a>
          </div>
        </div>
        <ProjectList projects={this.state.projects}/>
        <Contact/>
        <Footer/>
      </main>   
      
    );
  }
}


export default App;
