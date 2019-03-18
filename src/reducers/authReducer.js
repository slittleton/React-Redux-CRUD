

const INITIAL_STATE = {
  signInStatus: null,
  userID: null
}

export default ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case 'SIGN_IN':
      return { ...state, signInStatus: true };
    case 'SIGN_OUT':
      return { ...state, signInStatus: false };
    default:
      return state;
  }
}