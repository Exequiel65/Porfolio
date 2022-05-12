import React from 'react'

export default function NavBar() {

    let list = [ "Proyectos", "Contacto"]

  return (
    <nav>
        <i class="fas fa-bars burger-menu"></i>
        <div className='nav-contain' >
            
            <ul className='list-nav' >
                {
                    list.map((l, i) => (
                        <li key={l + i} className='item-nav' ><a href={`#${l}`}>{l}</a></li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}
