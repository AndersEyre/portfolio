import React from 'react'; 
import {Project} from '../Project/project';
import './projectList.css';


export class ProjectList extends React.Component {

    render(){
        return(
            <section className='projects'>
                <h1> Projects Iv Built </h1>
                <div className="project-list" id='projects'> 
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
