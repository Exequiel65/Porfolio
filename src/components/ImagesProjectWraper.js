import React from 'react';

const ImagesProjectWraper = ({project}) => {
    return (
        <div className='images-container'>
            <div className='image-project'>
                <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                    <img src={`/images/${project.images}`} alt="" />
                </a>

            </div>
            <div className='tecnology-used'>
                <ul>
                    {
                        project.tecnology.map((t, i) => <li className='tecnology' key={i}><img className='frameworks' src={`/images/${t.image}`} alt="" /></li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default ImagesProjectWraper;
