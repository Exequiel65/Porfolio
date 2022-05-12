import React from 'react';

const Home = () => {
    return (
        <section>
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
            
            
            <article className='box-container-about' id='sobre-mi'>
                <hr/>
                <div className='about-me-container'>
                    <h3 className='about-me'>Sobre Mí</h3>
                    <p className='description'>
                    Hola soy Marcos Britos, desarrollador FullStack egresado del curso de Fundacion Formar, Pampa Energia y Digital House. Me apasiona el crecimiento que tiene la tegnologia y los distintos alcances que tiene. Actualmente estoy buscando mi primera experiencia IT en el cual pueda aplicar los conocimientos adquiridos y poder adquirir mas saberes para poder crecer profesionalmente.

                    </p>
                </div>
            </article>


            <article className='box-container-technology'>
                <hr/>
                <div className='technology-container'>
                    <h3 className='technology-title'>Skills</h3>
                    <div className='container-technology'>
                        <div className='contain-box'>
                            <img src="/images/HTML.svg" className='image-technology' alt="" />
                            <p className='technology' > HTML</p>
                        </div>
                        <div className='contain-box'>
                            <img src="/images/HTML.svg" className='image-technology' alt="" />
                            <p className='technology' > HTML</p>
                        </div>
                        <div className='contain-box'>
                            <img src="/images/HTML.svg" className='image-technology' alt="" />
                            <p className='technology' > HTML</p>
                        </div>
                        <div className='contain-box'>
                            <img src="/images/HTML.svg" className='image-technology' alt="" />
                            <p className='technology' > HTML</p>
                        </div>
                        <div className='contain-box'>
                            <img src="/images/HTML.svg" className='image-technology' alt="" />
                            <p className='technology' > HTML</p>
                        </div>
                        <div className='contain-box'>
                            <img src="/images/HTML.svg" className='image-technology' alt="" />
                            <p className='technology' > HTML</p>
                        </div>
                        <div className='contain-box'>
                            <img src="/images/HTML.svg" className='image-technology' alt="" />
                            <p className='technology' > HTML</p>
                        </div>
                        <div className='contain-box'>
                            <img src="/images/HTML.svg" className='image-technology' alt="" />
                            <p className='technology' > HTML</p>
                        </div>
                        <div className='contain-box'>
                            <img src="/images/HTML.svg" className='image-technology' alt="" />
                            <p className='technology' > HTML</p>
                        </div>
                        <div className='contain-box'>
                            <img src="/images/HTML.svg" className='image-technology' alt="" />
                            <p className='technology' > HTML</p>
                        </div>
                        <div className='contain-box'>
                            <img src="/images/HTML.svg" className='image-technology' alt="" />
                            <p className='technology' > HTML</p>
                        </div>
                        
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Home;
