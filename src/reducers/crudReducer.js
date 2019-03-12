

const initialState = {
  posts: [],
  post: {},
  id: null
}

export default (state=initialState, action) => {
  switch (action.type){
    case 'FETCH_POSTS':
      return {
        ...state, 
        posts: action.payload
      };
    case 'FETCH_POST':
      return {
        ...state, 
        post: action.payload
      };
    case 'CREATE_POST':
      console.log('from reducer: ' + action.payload.body);
      return {
        ...state, 
        posts: [...state.posts, action.payload],
        post: action.payload,
        id: action.payload.id
      };
    case 'DELETE_POST':
      return {
        ...state, 
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case 'UPDATE_POST':
      return {
        ...state,
        posts: state.posts.map(
          post=> post.id === action.payload.id ? post = action.payload : post
        ),
        post: action.payload
    };
    default: return state;
  }
}
