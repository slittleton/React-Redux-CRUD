
export default (state={}, action) => {
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
      return {
        ...state, 
        post: action.payload
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
        )
    };
    default: return state;
  }
}
