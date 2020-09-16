import React from 'react';
import { Project } from './Project';
import '../Styles/ProjectList/projectList.css';




export class ProjectList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    componentDidMount(){
        document.addEventListener('scroll', () => {
            const visible = window.scrollY > 500;
            if (visible !== false) {
                this.setState({ visible })
            }
          });
    }

    render() {
        return (
            <section className='projects' id='projects' style={ this.state.visible ? { opacity: '1' } : { opacity: '0' } } >
                <h1 id='projects-header'>PROJECTS</h1>
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

export default ProjectList;
