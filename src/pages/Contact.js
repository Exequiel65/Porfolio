import React from 'react';

const Contact = () => {
    return (
        <main className='main-contact'>
            <h2>Contactamé</h2>
            <div className='icons-container'>
                <div className='icon'>
                    <div className='icon-image animate__animated animate__fadeIn animate__delay-1s'>
                        <a href="https://www.linkedin.com/in/marcos-britos/" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin-brands 1.svg" alt="" /></a>
                    </div>
                    <h5 className='icon-name'>
                        <a href="https://www.linkedin.com/in/marcos-britos/" target="_blank" rel="noopener noreferrer">LinkeIn</a>
                    </h5>
                </div>
                <div className='icon'>
                    <div className='icon-image animate__animated animate__fadeIn animate__delay-1s'>
                        <a href="mailto:marcos97britos@gmail.com" target="_blank" rel="noopener noreferrer"><img src="/images/envelope-solid 1.svg" alt="" /></a>
                    </div>    
                    <h5 className='icon-name'>
                        <a href="mailto:marcos97britos@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
                    </h5>
                </div>
                <div className='icon'>
                    <div className='icon-image animate__animated animate__fadeIn animate__delay-1s'>
                        <a href="https://github.com/Exequiel65" target="_blank" rel="noopener noreferrer"><img src="/images/github-brands 1.svg" alt="" /></a>
                        
                    </div>
                    <h5 className='icon-name'>
                        <a href="https://github.com/Exequiel65" target="_blank" rel="noopener noreferrer">GitHub</a> 
                    </h5>
                </div>
            </div>
        </main>
    );
}

export default Contact;
