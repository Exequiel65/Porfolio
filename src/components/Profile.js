import React from 'react';
import { Link } from 'react-router-dom'
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
                <Link to="/contact" className='bt-contact'>Contactame!</Link>
            </div>
        </article>
    );
}

export default Profile;
