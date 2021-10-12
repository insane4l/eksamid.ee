import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="menu__list">
                <li className="menu__list-item"><NavLink to="/tests">Тесты</NavLink></li>
                <li className="menu__list-item"><NavLink to="/links">Ссылки</NavLink></li>
                <li className="menu__list-item"><NavLink to="/tips">Советы</NavLink></li>
                <li className="menu__list-item"><NavLink to="/contacts">Контакты</NavLink></li>
            </ul>
        </nav>
    )
}


export default Navbar

