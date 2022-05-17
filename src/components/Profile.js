import React from 'react';

const Profile = () => {
    return (
        <article className='profile'>
            <div className='image-container'>
                <img src="/images/avatar.jpg" className='image' alt="" />
            </div>

            <div className='title'>
                <h2 className='title-name'>Marcos Britos</h2>
                <h5 className='subtitle'>FullStack Developer Jr.</h5>
            </div>

            <div className='btn-contact-container'>
                <a href="#contact" className='bt-contact'>Contactame!</a>
            </div>
        </article>
    );
}

export default Profile;
