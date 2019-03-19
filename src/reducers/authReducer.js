

const INITIAL_STATE = {
  signInStatus: null,
  userID: null
}

export default ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case 'SIGN_IN':
      return { ...state, signInStatus: true, userId: action.payload };
    case 'SIGN_OUT':
      return { ...state, signInStatus: false, userId: null };
    default:
      return state;
  }
}