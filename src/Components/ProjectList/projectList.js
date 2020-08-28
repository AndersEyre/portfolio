import React from 'react'; 
import {Project} from '../Project/project';
import './projectList.css';


export class ProjectList extends React.Component {

    render(){
        return(
            <div class="project-list"> 
              {
                  this.props.projects.map(project => {
                      return <Project key={project.id} project={project}/>
                  })
              };
            </div>

        );
    }
};
