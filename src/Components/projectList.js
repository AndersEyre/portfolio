import React from 'react';
import { Project } from './Project';
import '../Styles/ProjectList/projectList.css';


export class ProjectList extends React.Component {

    render() {
        return (
            <section className='projects' id='projects'>
                <h1 id='projects-header'> PROJECTS </h1>
                <div className="project-list" >
                    {
                        this.props.projects.map(project => {
                            return <Project key={project.id} project={project} />
                        })
                    }
                </div>
            </section>

        );
    }
};
