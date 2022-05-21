import React from 'react';
import DataProjects from '../data/dataProjects';
import Project from './Project';

const ProjectsWraper = () => {
    let data = DataProjects
    return (
        <div className='projects-container animate__animated animate__fadeInRight'>
            {
                data.map((p, i) =>{
                    return <Project key={i} {...p} />
                })
            }
            
        </div>
    );
}

export default ProjectsWraper;
