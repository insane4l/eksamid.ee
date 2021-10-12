import React from 'react'

import s from './Footer.module.css'

const Footer: React.FC = () => {
    return (
        <footer className={s.footer}>
             © <a href="http://karpeyev.ru" className={s.authorLink}>karpeyev</a>
        </footer>
    )
}

export default Footer