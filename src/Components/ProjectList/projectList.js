import React from 'react'; 
import {Project} from '../Project/project';
import './projectList.css';


export class ProjectList extends React.Component {

    render(){
        return(
            <section className='projects' id='projects'>
                <h1 id='projects-header'> Projects Iv Built </h1>
                <div className="project-list" > 
                  {
                    this.props.projects.map(project => {
                        return <Project key={project.id} project={project}/>
                    })
                  }
                </div>
            </section>

        );
    }
};
