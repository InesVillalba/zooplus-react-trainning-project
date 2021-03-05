import { createContext, useReducer, useEffect } from 'react'
import { reducer, initialState } from '../reducer/reducer'
import { updatePosts, getPosts } from '../../service'
import { useHistory } from 'react-router-dom'

export const PostsContext = createContext(null)

export const PostsProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const history = useHistory()

    const onCreatePost = async (newPost) => {
        const res = await updatePosts(newPost)
        dispatch({type: 'CREATE_NEW_POST', payload: res.data})
        history.push('/')
    }

    const handleGetPosts = async () => {
        const res = await getPosts()
        dispatch({type: 'GET_POSTS', payload: res.data})
    }

    useEffect(() => {
        handleGetPosts()
    }, [])

    return (
        <PostsContext.Provider value={{state, dispatch, onCreatePost}}>
            {children}
        </PostsContext.Provider>
    )
} 