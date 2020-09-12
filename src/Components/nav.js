import React from 'react';
import '../Styles/Nav/nav.css';


let prevScrollpos = window.pageYOffset;

export class Nav extends React.Component {


  handleScroll = () => {
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('nav-bar').style.top = '0px';
      } else {
        document.getElementById('nav-bar').style.top = '-240px';
      }
      prevScrollpos = currentScrollPos;
    }
  }

  componentDidMount() {
    console.log('mount')
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    console.log('unmount')
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <nav id='nav-bar'>
        <ul className='nav-bar'>
          <div id='logo'>
            <li >Anders Eyre</li>
          </div>

          <a href='#about'>
            <div>
              <img src={require('../Styles/Nav/Images/about.png')} alt='icon' />
              <li>About</li>
            </div>
          </a>

          <a href='#projects'>
            <div>
              <img src={require('../Styles/Nav/Images/projects.png')} alt='icon' />
              <li>Projects</li>
            </div>
          </a>

          <a href='#contact'>
            <div>
              <img src={require('../Styles/Nav/Images/contact.png')} alt='icon' />
              <li>Contact</li>
            </div>
          </a>
          <div className='underbar'></div>
        </ul>
      </nav>
    )
  }
}

