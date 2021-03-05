export const initialState = {
    posts: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_NEW_POST': 
            return {...state, posts: [action.payload, ...state.posts]}
        case 'GET_POSTS':
            return {...state, posts: action.payload}
        default:
            return state
    }
}