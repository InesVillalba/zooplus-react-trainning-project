import { useContext } from 'react'
import { PostsContext } from '../context/PostsContext'
import styles from './PostDetail.module.css'

const PostDetail = ({match}) => {

    const {state} = useContext(PostsContext)

    const details = state.posts.find(post => post.id === parseInt(match.params.id))
    
   if (!details) {
       return null
   }

    return (
        <div className={styles.detailContainer}>
            <div className={styles.detailHeader}>
                <h2 className={styles.detailTitle}>{details.title}</h2>
                <span className={styles.detailDate}>
                    {new Date(Date.parse(details.creationDate)).toLocaleDateString('en', {year: 'numeric', month: 'long', day: 'numeric'})}
                </span>
            </div>
            <span className={styles.detailTopic}>#{details.topic}</span>
            <p className={styles.detailContent}>{details.content}</p>
        </div>
    )
}

export default PostDetail