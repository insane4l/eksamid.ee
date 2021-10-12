import React from 'react'
import Navbar from '../Navbar'

import s from './Header.module.css'

const Header: React.FC = () => {
    return (
        <header className="header">
            <Navbar />
        </header>
    )
}

export default Header