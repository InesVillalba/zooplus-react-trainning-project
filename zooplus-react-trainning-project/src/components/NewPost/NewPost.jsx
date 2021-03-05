import { useState, useContext } from 'react'
import { PostsContext } from '../context/PostsContext'
import { useForm } from 'react-hook-form'
import styles from './NewPost.module.css'

const NewPost = () => {
    const {onCreatePost} = useContext(PostsContext)
    const {register, handleSubmit, errors} = useForm()

    const [title, setTitle] = useState('')
    const [topic, setTopic] = useState('')
    const [content, setContent] = useState('')

    console.log(errors)

    return (
        <form onSubmit={handleSubmit(() => onCreatePost({title, topic, content}))} className={styles.form}>
            <h3 className={styles.formTitle}>Let's write an awesome post!</h3>
            <div>
                <label htmlFor="title">Title</label>
                <input 
                    id="title"
                    name="title"
                    type="text"
                    className={styles.fieldInput}
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                    ref={register({
                        required: true, 
                    })}
                />
                {errors.title && <p className={styles.error}>Title is required</p>}
            </div>
            <div>
                <label htmlFor="topic">Topic</label>
                <input 
                    id="topic"
                    name="topic" 
                    type="text"
                    className={styles.fieldInput}
                    value={topic}
                    onChange={e => setTopic(e.target.value)}
                    ref={register({
                        required: true, 
                    })}
                />
                {errors.topic && <p className={styles.error}>Topic is required</p>}
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <textarea 
                    name="content" 
                    id="content" 
                    cols="30" 
                    rows="12"
                    className={styles.fieldTextarea}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    ref={register({
                        required: true, 
                    })}
                />
                {errors.content && <p className={styles.error}>Content is required</p>}
            </div>   
            <button type="submit" className={styles.submitBtn}>Create!</button>
            
        </form>
    )
}

export default NewPost