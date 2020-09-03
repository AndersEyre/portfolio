import React from 'react';

export class Nav extends React.Component {
   
   
    render() {
        return (
            <nav id='nav-bar'>
                <ul className='nav-bar'>
                    <div id='logo'>
                        <li >Anders Eyre</li>
                    </div>

                    <a href='#about'>
                        <div>
                          <img src={require('./about.png')} alt='icon'/>
                          <li>About</li>
                      </div>
                    </a>

                    <a href='#projects'>
                        <div>
                          <img src={require('./projects.png')} alt='icon'/>
                          <li>Projects</li>
                      </div>
                    </a>

                    <a href='#contact'> 
                      <div>
                          <img src={require('./contact.png')} alt='icon'/>
                          <li>Contact</li>
                      </div>
                    </a>
                </ul>
            </nav>
        )
    }
}