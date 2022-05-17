import React from 'react';
import Project from './Project';

const ProjectsWraper = () => {
    let data = [
        {
            name : "Vivero Timbo",
            deploy : "https://vivero-timbo.herokuapp.com/",
            github: "https://github.com/grupo-10-Vivero-c12/proyecto-Integrador",
            images : "viverp-timbo.PNG",
            descrition : ""
        },
        {
            name : "API-saint patrick FOR IDEAS",
            deploy : "https://app-bancaria.herokuapp.com/",
            github: "https://github.com/Equipo78/Api-saintpatrick-homebanking-",
            images : "api-saint.PNG",
            descrition : ""
        },
        {
            name : "Cliente de Vivero Timbo en React",
            deploy : "https://vivero-timbo.netlify.app/",
            github: "https://github.com/Exequiel65/Cliente-Vivero-Timbo-React",
            images : "viverp-timbo.PNG",
            descrition : ""
        },
        {
            name : "App heroes",
            deploy : "https://preeminent-elf-19e0b7.netlify.app/marvel",
            github: "https://github.com/Exequiel65/App-React--Heroes",
            images : "App-heroes.PNG",
            descrition : ""
        }
    ]
    return (
        <div className='projects-container'>
            {
                data.map((p, i) =>{
                    return <Project key={i} {...p} />
                })
            }
            
        </div>
    );
}

export default ProjectsWraper;
