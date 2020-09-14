import React from 'react';
import '../Styles/Skills/skills.css';

import cameraIcon from '../Styles/Skills/Icons/content-creation.png';
import devIcon from '../Styles/Skills/Icons/development.png';
import softSkillsIcon from '../Styles/Skills/Icons/soft-skills.png';


export class Skills extends React.Component {

    render(){
        return(
            <div className='skills'>
                <div className='skill-set'>
                    <img src={cameraIcon} alt='camera-icon' className='icon'></img>
                    <h2>Content Creation</h2>
                    <ul className='skill-list'>
                        <li>Photo/Videography</li>
                        <li>Premiere Pro</li>
                        <li>Lightroom</li>
                        <li>Brand Storytelling</li>
                    </ul>
                </div>
                <div className='skill-set'>
                    <img src={devIcon} alt='development-icon' className='icon'></img>
                    <h2>Development</h2>
                    <ul className='skill-list'>
                        <li>javaScript</li>
                        <li>React</li>
                        <li>Sass</li>
                        <li>Node</li>
                    </ul>
                </div>
                <div className='skill-set'>
                    <img src={softSkillsIcon} alt='soft-skils-icon' className='icon'></img>
                    <h2>Soft Skills</h2>
                    <ul className='skill-list'>
                        <li>Critial Thinking</li>
                        <li>Adaptability</li>
                        <li>Leadership</li>
                        <li>Conflict resolution</li>
                    </ul>
                    
                </div>
            </div>
        )
    }
};

export default Skills;