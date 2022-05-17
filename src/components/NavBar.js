import React from 'react'
import {Link} from 'react-router-dom'
export default function NavBar() {

    let list = [
        {
            name : "Inicio",
            path : '/'
        }, 
        {
            name : "Proyectos", 
            path : '/projects',
        },
        {
            name : "Contacto",
            path : '/contact'
        }
    ]

  return (
    <nav>
        <i className="fas fa-bars burger-menu"></i>
        <div className='nav-contain' >

            
            <ul className='list-nav' >
                {
                    list.map((l, i) => (
                        <li key={l.name + i} className='item-nav' ><Link to={l.path}>{l.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}
