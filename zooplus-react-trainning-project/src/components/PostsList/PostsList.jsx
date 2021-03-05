import { useContext } from 'react'
import PostCard from '../PostCard/PostCard' 
import styles from './PostsList.module.css'
import { PostsContext } from '../context/PostsContext';

const PostsList = () => {

    const {state} = useContext(PostsContext)

    let postsLists = <h3>You haven't posted anything yet! ;-)</h3>

    if (state.posts.length > 0) {
        postsLists = state.posts.map(post => (
            <PostCard id={post.id} title={post.title} topic={post.topic} content={post.content} />
        ))
    }

    return (
        <ul className={styles.listContainer}>
            {postsLists}
        </ul>
    )
}

export default PostsList