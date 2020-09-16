import React from 'react';
import '../Styles/Project/project.css'

export class Project extends React.Component {

    render() {

        return (
            <div className='project'>
                <div className='img-container'>
                    <img src={this.props.project.img} alt='project-img'></img>
                    <div className='project-description'>
                        <p>{this.props.project.description}</p>
                    </div>
                </div>
                <div className='project-info'>
                    <h1>{this.props.project.name}</h1>
                    <h3><a href={this.props.project.demo.link} target='_blank' rel='noopener noreferrer' >{this.props.project.demo.title}</a></h3>
                    <h3><a href={this.props.project.github} target='_blank' rel='noopener noreferrer' >GitHub</a></h3>
                </div>
            </div>

        );
    }
};

export default Project;
