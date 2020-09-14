import React from 'react';
import { Nav } from './Nav';
import { ProjectList } from './ProjectList'
import { Contact } from './contact';
import { Footer } from './Footer';
import { Skills } from './Skills';
import '../Styles/App/App.css';

import Pdf from '../Styles/App/Resume.pdf';
import ProjectImg1 from '../Styles/App/Images/Jammming.png';
import ProjectImg2 from '../Styles/App/Images/Ravenous.png';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      projects:[
        {
          id:1,
          img: ProjectImg1,
          name: 'Jammming',
          description: 'A Web app to create and add a music playlist to your existing spotify account.',
          codepen: 'https://codepen.io/',
          github: 'https://github.com/AndersEyre/jammming',
        },
        {
          id: 2,
          img: ProjectImg2,
          name: 'Ravenous',
          description: 'Find the best places to eat anywhere in the world!',
          codepen: 'https://codepen.io/',
          github: 'https://github.com/AndersEyre/ravenous',
        },
        {
          id: 3,
          img: '//img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/wibbitz/wbz-what-to-do-about-hairballs-in-cats.jpg',
          name: 'Proxy project',
          description: '',
          codepen: 'https://codepen.io/',
          github: 'https://github.com/',
        },
        
      ],
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
            <h1>Hi Im Anders.</h1>
            <p className='about-description'> I'm A Self Taught Developer From Melbourne, Australia. I Enjoy Designing And Building Interactive Web Pages For Clients In Exciting Fields Such As Music, Arts, And Action Sports. </p>
            <a href={Pdf} target='_blank' rel='noopener noreferrer'><p className='resume'>Resume</p></a>
          </div>
        </div>
        <Skills/>
        <ProjectList projects={this.state.projects} />
        <Contact/>
        <Footer/>
      </main>   
    );
  }
}


export default App;
