import React from 'react';
import Skill from './Skill';

const SkillWraper = () => {
    let data =[
        {
            name : "HTML",
            image : 'HTML.svg'
        },
        {
            name : "CSS",
            image : 'CSS.svg'
        },
        {
            name : "JS",
            image : 'JS.svg'
        },
        {
            name : "React.js",
            image : 'REACT.svg'
        },
        {
            name : "Node.js",
            image : 'NODE.svg'
        },
        {
            name : "MySQL",
            image : 'MYSQL.svg'
        },
        {
            name : "Python",
            image : 'PYTHON.svg'
        },
        {
            name : "Git",
            image : 'GIT.svg'
        },
    ]
    return (
        <article className='box-container-technology'>
            <hr />
            <div className='technology-container'>
                <h3 className='technology-title'>Skills</h3>
                <div className='container-technology'>
                    {
                        data.map( (tec, i) => (
                           <Skill key={tec.name + i} {...tec}/> 
                        ))
                    }
                    
                </div>
            </div>
        </article>
    );
}

export default SkillWraper;
