import React from 'react';

export class Nav extends React.Component {
   
   
    render(){
        return (
            <nav id='navbar'>
                <ul className='navbar'>
                    <div>
                        <img src={require("./about.png")}/>
                        <li><a href="">About</a></li>
                    </div>
                    <div>
                        <img src={require("./projects.png")}/>
                        <li><a href="">Projects</a></li>
                    </div>
                    <div>
                        <img src={require("./contact.png")}/>
                        <li><a href="">Contact</a></li>
                    </div>
                </ul>
            </nav>
        )
    }
}