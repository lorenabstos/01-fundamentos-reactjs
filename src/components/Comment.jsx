import { Avatar } from './Avatar'
import { HandsClapping, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment({ content }) {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/lorenabstos.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lorena Bastos</strong>
                            <time title="18 de Março às 17:00h" dateTime="2023-03-18 17:00:00">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <HandsClapping />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}