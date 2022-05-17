import React from 'react';

const Skill = ({name, image}) => {
    
    return (
        <div className='contain-box'>
            <img src={`/images/${image}`} className='image-technology' alt="" />
            <p className='technology' > {name}</p>
        </div>
    );
}

export default Skill;
