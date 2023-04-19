import container from 'styles/Container.module.css';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={`${container.containerH} ${styles.footer}`}>
            <h2>Desenvolvido Por Ciro Monteiro</h2>
        </footer>
    )
}
