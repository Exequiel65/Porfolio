import React from 'react';
import {Link} from 'react-router-dom'

const Project = (props) => {
    return (
        <div className='project-contain'>
            <Link to={`/project/detail/${props.id}`}>
                <div className='photo-project'>
                    <img src={`/images/${props.images}`} className='img-project' alt="foto de proyecto" />
                </div>
                <div className='name-project'>
                    <h5>{props.name}</h5>
                </div>
            </Link>
            
        </div>
    );
}

export default Project;
