import React from 'react';
import { Nav } from './Nav';
import { ProjectList } from './ProjectList'
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Skills } from './Skills';
import '../Styles/App/App.css';

import Pdf from '../Styles/App/Resume.pdf';
import ProjectImg1 from '../Styles/App/Images/Jammming.png';
import ProjectImg2 from '../Styles/App/Images/Ravenous.png';
import ProjectImg3 from '../Styles/App/Images/expresso-screenshot.png'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      projects:[
        {
          id:1,
          img: ProjectImg1,
          name: 'Jammming',
          description: 'A web app to create and add a music playlist to your existing Spotify account',
          demo: {
            title: 'Demo',
            link: 'http://jammyjam.surge.sh/',
          },
          github: 'https://github.com/AndersEyre/jammming',
        },
        {
          id: 2,
          img: ProjectImg2,
          name: 'Ravenous',
          description: 'Search for restaurants via location and other filters',
          demo: {
            title: 'Demo',
            link: 'http://ravenousdemo.surge.sh/',
          },
          github: 'https://github.com/AndersEyre/ravenous',
        },
        {
          id: 3,
          img: ProjectImg3,
          name: 'Expresso',
          description: 'A web api for a fictional coffee shop to update menus and employee information',
          demo: {
            title: '',
            link: '',
          },
          github: 'https://github.com/AndersEyre/Expresso',
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
            <a href={Pdf} target='_blank' rel='noopener noreferrer'><p id='resume'>Resume</p></a>
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
