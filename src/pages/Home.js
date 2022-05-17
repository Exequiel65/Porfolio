import React from 'react';
import AboutMe from '../components/AboutMe';
import Profile from '../components/Profile';
import SkillWraper from '../components/SkillWraper';

const Home = () => {
    return (
        <main>
            <Profile />
            <AboutMe />
            <SkillWraper />            
        </main>
    );
}

export default Home;
