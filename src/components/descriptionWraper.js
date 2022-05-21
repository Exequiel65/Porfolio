import React from 'react';

const DescriptionWraper = ({project}) => {
    console.log(project)
    return (
        <div className='description-container'>
            <div className='description-project'>
                <p>{project.descrition}</p>
            </div>
            <div className='links'>
                <ul>
                    <li><a href={project.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github link"></i></a></li>
                    <li><a href={project.deploy} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt link"></i></a></li>
                </ul>
            </div>
        </div>
    );
}

export default DescriptionWraper;
