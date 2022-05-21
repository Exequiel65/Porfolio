import React from 'react';
import DescriptionWraper from './descriptionWraper';
import ImagesProjectWraper from './ImagesProjectWraper';

const Detail = ({project}) => {
    return (
        <div className='detail-container animate__animated animate__fadeInUp'>
            <DescriptionWraper project={project}/>

            <ImagesProjectWraper project={project} />

        </div>
    );
}

export default Detail;
