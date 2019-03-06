import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async (dispatch, getState) =>{
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response.data})
  };
}

export const fetchPost = (id) => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/posts/${id}`);

    dispatch({type: 'FETCH_POST', payload: response})
  }
}