import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src="https://github.com/lorenabstos.png" />
                    <div className={styles.authorInfo}>
                        <strong>Lorena Bastos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time 
                    title="18 de Março às 17:00h" 
                    dateTime="2023-03-18 17:00:00"
                >
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a>#novoprojeto</a>{' '}
                    <a>#nlw</a>{' '}
                    <a>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="Escreva um comentário..."
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}