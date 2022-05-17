import React from 'react';

const Project = (props) => {
    console.log(props)
    return (
        <div className='project-contain'>
            <div className='photo-project'>
                <img src={`/images/${props.images}`} className='img-project' alt="foto de proyecto" />
            </div>
            <div className='name-project'>
                <h5>{props.name}</h5>
            </div>
        </div>
    );
}

export default Project;
