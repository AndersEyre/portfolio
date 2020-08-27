import React from 'react';

export class Nav extends React.Component {
   
   
    render(){
        return (
            <nav id='nav-bar'>
                <ul className='nav-bar'>
                    <div id='logo'>
                        
                        <li >Anders Eyre</li>
                    </div>
                    <div>
                        <img src={require('./about.png')} alt='icon'/>
                        <li><a href='#about'>About</a></li>
                    </div>
                    <div>
                        <img src={require('./projects.png')} alt='icon'/>
                        <li><a href='#projects'>Projects</a></li>
                    </div>
                    <div>
                        <img src={require('./contact.png')} alt='icon'/>
                        <li><a href='#contact'>Contact</a></li>
                    </div>
                </ul>
            </nav>
        )
    }
}