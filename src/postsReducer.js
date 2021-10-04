export default function postsReducer (state, action) {
    switch (action.type) {
        case 'CREATE_POST':
          const newPost = { 
                id: '_' + Math.random().toString(36).substr(1, 9),
                title: action.title,
                description: action.description ? action.description : "",
                dateCreated: Date.now().toString(),
                complete: false,
                dateCompleted: ""
            }
            return [...state, newPost]
        case 'TOGGLE_POST':
            return state.map(post => post.id !== action.id ? post : {...post, complete: !post.complete, dateCompleted: !post.complete ? Date.now().toString() : ""})
        case 'DELETE_POST':
            return state.filter(post => post.id !== action.id)
        default:
           return state;
    }
  }
