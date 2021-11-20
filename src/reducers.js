function accountsReducer (state, action) {
    switch (action.type) {
        case 'SHOW':
            return action.accounts;
        default:
            return state;
    }
}

function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return {
                                'username': action.username,
                                'access_token': action.access_token
                            }
        case 'LOGOUT':
            return {
                'username': undefined,
                'access_token': undefined
                            }
        default:
            return state;
    }
}

function postsReducer (state, action) {
    switch (action.type) {
        case 'CREATE_POST':
          const newPost = { 
                title: action.title,
                description: action.description ? action.description : "",
                dateCreated: Date(Date.now()),
                complete: false,
                dateCompleted: ""
            }
            return [...state, newPost]
        case 'TOGGLE_POST':
            return state.map((p) => {
                if(p._id === action.id) {
                    p.complete = action.complete;
                    p.dateCompleted = action.dateCompleted;
                }
                return p;
            })
        case 'DELETE_POST':
            
            return state.filter((post) => post._id !== action.id)
        case 'FETCH_POSTS':
            return action.posts
        default:
           return state;
    }
  }


  export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        posts: postsReducer(state.posts, action),
        accounts: accountsReducer(state.accounts, action)
    }
}
