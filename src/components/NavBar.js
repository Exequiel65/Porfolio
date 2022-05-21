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

    const handleDisplayMenu = ()=>{
        let list = document.querySelector('#list')
        list.classList.toggle('block')

    }
  return (
    <nav>
        <i className="fas fa-bars burger-menu" onClick={handleDisplayMenu}></i>
        <div className='nav-contain' >

            
            <ul className='list-nav block' id='list'>
                {
                    list.map((l, i) => (
                        <li key={l.name + i} className='item-nav' ><Link className='item' to={l.path}>{l.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}
