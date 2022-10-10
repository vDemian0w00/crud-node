import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-dark text-white p-4 rounded-bottom">
        <div className="h1">Personajes Studio Ghibli</div>

        <ul className="nav nav-tabs">
            <li className="nav-item px-2"><Link className="nav-link link-light" to="/">Inicio</Link></li>
            <li className="nav-item px-2"><Link className="nav-link link-light" to="/add" >Añadir un personaje nuevo</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
