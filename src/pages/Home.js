import React from 'react';
import AboutMe from '../components/AboutMe';
import Profile from '../components/Profile';
import SkillWraper from '../components/SkillWraper';

const Home = () => {
    return (
        <main className='animate__animated animate__fadeIn animate__delay-1s'>
            <Profile />
            <AboutMe />
            <SkillWraper />            
        </main>
    );
}

export default Home;
