import React from 'react';
import './project.css'

export class Project extends React.Component {

    render(){
      return (
            <div class='project'>
                <div class='img-container'>
                    <img src={this.props.project.img} alt='project-img'></img>
                </div>
                <h1>{this.props.project.name}</h1>
                <h3><a href={this.props.project.codepen} target='_blank' rel="noopener noreferrer">CodePen</a></h3>
                <h3><a href={this.props.project.github} target='_blank' rel="noopener noreferrer">GitHub</a></h3>
            </div>

      );
    }
};
