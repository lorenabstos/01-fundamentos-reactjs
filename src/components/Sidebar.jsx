import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1602300991431-27a957a5bcf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=50" 
            />

            <div className={styles.profile}>
                <Avatar hasBorder={true} src="https://github.com/lorenabstos.png" />
                <strong>Lorena Bastos</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}