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

export const createPost = (newPostData) => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.post('/posts', newPostData);
    console.log(response.data)
    dispatch({ type: 'CREATE_POST',payload: response.data})
  }
}

export const deletePost = (id) => {
  return async (dispatch) => {
    await jsonPlaceholder.delete(`/posts/${id}`);

    dispatch({ type: 'DELETE_POST', payload: id})
  }
}

export const updatePost = (data)=> {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.patch(`/posts/${data.id}`, data);

    dispatch({ type: "UPDATE_POST", payload: response})
  }
}