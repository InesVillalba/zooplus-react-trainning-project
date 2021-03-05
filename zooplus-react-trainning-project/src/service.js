import axios from 'axios'

export const updatePosts = async (data) => {
    try {
        const res = await axios.post('http://localhost:8000/posts', {...data, creationDate: new Date()})
        return res
      
    } catch (error) {
        return Promise.reject(error)
    }
}

export const getPosts = async () => {
    try {
        const res = await axios.get('http://localhost:8000/posts?_sort=id&_order=desc')
        return res 

    } catch (error) {
        return Promise.reject(error)
    }
}