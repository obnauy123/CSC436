function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}

function postsReducer (state, action) {
    switch (action.type) {
        case 'CREATE_POST':
          const newPost = { 
                title: action.postData.title,
                description: action.postData.description ? action.postData.description : "",
                dateCreated: Date(Date.now()),
                complete: false,
                dateCompleted: ""
            }
            return [...state, newPost]
        case 'TOGGLE_POST':
            
            return state.map(post => post.id !== action.id ? post : {...post, complete: !post.complete, dateCompleted: !post.complete ? Date(Date.now()) : ""})
        case 'DELETE_POST':

            return state.filter(post => post.id !== action.id)
        case 'FETCH_POSTS':
            return action.posts
        default:
           return state;
    }
  }


  export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        posts: postsReducer(state.posts, action)
    }
}
