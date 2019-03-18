import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {


  render(){
    return(
      <div>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    signInStatus: state.authReducer.signInStatus,
  }
}


export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);