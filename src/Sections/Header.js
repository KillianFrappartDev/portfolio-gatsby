import React from 'react'

import headerStyle from '../Styles/header.module.css';

const Header = () => {
    return (
        <header className={headerStyle.section}>
            <div className={headerStyle.container}>
                <div className={headerStyle.invisibleTop}></div>
                <h1 className={headerStyle.title}>Full-Stack Developer</h1>
                <div className={headerStyle.invisibleBottom}></div>
            </div>
        </header>
    )
}

export default Header
