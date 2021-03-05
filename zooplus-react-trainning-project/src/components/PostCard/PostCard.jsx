import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'

const PostCard = ({id, title, topic, content}) => {
    return (
        <li className={styles.card}>
            <Link 
                className={styles.cardTitle} 
                to={{
                    pathname: `/post/${id}`,
                    state: {title, topic, content}
                }}
            >
                <h2>{title}</h2>
            </Link>
            <span className={styles.cardTopic}>#{topic}</span>
            <p className={styles.cardContent}>{content}</p>
        </li>
    )
}

export default PostCard