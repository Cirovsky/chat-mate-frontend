import React from 'react'
import container from 'styles/Container.module.css';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={`${container.containerH} ${styles.header}`} >
            Chat-Mate
        </header>
    )
}
