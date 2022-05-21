import React from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/detail';
import GetProject from '../helpers/getProject';

const ProjectDetail = () => {
    let id = useParams()
    let project = GetProject(id)
    project = project[0]



    return (
        <main className='project-detail'>
            <h2>{project.name}</h2>
            <Detail project={project} />
        </main>
    );
}

export default ProjectDetail;
