import React from 'react';
import '../Styles/Nav/nav.css';


let prevScrollpos = window.pageYOffset;



export class Nav extends React.Component {
  constructor(props) {
    super(props)


  }

  handleResize = () => {
    if(window.innerWidth >= 650){
      const x = document.getElementById('nav-bar')
      if (x.className === 'responsive') {
        x.className = 'nav-bar'
      } else {
        x.className = 'nav-bar'
      }
    }
  }

  handleClick = () => {
    const x = document.getElementById('nav-bar');
    if (x.className === 'nav-bar') {
      x.className = 'responsive';
    } else {
      x.className = 'nav-bar';
    }
  }


  handleScroll = () => {
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById('navigation').style.top = '0px';
        } else {
          document.getElementById('navigation').style.top = '-240px';
        }
        prevScrollpos = currentScrollPos;
      }
    }
  


  componentDidMount() {
    console.log('mount')
    window.addEventListener('resize', this.handleResize, true)
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    console.log('unmount')
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <nav id='navigation'>
        <ul id='nav-bar' className='nav-bar'>

          <div id='logo' className='active'>
            <li>Anders Eyre</li>
            <a class='icon' onClick={this.handleClick}>
              <i href="!#" class='fa fa-bars' ></i>
            </a>
          </div>

          <a href='#about' className='hamburger-dropdown'>
            <div>
              <li>About</li>
            </div>
          </a>

          <a href='#projects' className='hamburger-dropdown'>
            <div>

              <li>Projects</li>
            </div>
          </a>

          <a href='#contact' className='hamburger-dropdown'>
            <div>
              <li>Contact</li>
            </div>
          </a>
          <div className='underbar'></div>
        </ul>
      </nav>
    )
  }
}

export default Nav;
