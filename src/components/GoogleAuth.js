import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
componentDidMount() {
  window.gapi.load('client:auth2', ()=>{
    window.gapi.client.init({
      clientId: '518257510661-96ki5slnuir29qco5s3vu727siqasgil.apps.googleusercontent.com',
      scope: 'email'
    }).then(()=>{ // handle promise
      this.auth = window.gapi.auth2.getAuthInstance(); //get access to auth object,
      this.onAuthChange(this.auth.isSignedIn.get());  //then use it to change state by calling actions in func
      this.auth.isSignedIn.listen(this.onAuthChange); //listen for change in sign in status with callback
    });
  });
}

onAuthChange = (signInStatus) => {
  if(signInStatus){
    this.props.signIn(this.auth.currentUser.get().getId())
  } else {
    this.props.signOut()
  }
}

onSignIn = () => {
  this.auth.signIn();
}
onSignOut = () => {
  this.auth.signOut();
}

  renderAuthButton(){
     if (this.props.signInStatus === null) {
       return <div className="link oauth-wrapper">LOADING</div>
     } else if ( this.props.signInStatus){
       return  <div className="link oauth-wrapper" onClick={this.onSignOut}>Sign Out</div>
     } else if(this.props.signInStatus=== false){
       return <div className="link oauth-wrapper" onClick={this.onSignIn}>Sign In With Google</div>
     }
  }

  render(){
    return(
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    signInStatus: state.authReducer.signInStatus
  }
}


export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

// GOOGLE OAUTH CLIENT ID for this project: 
// 518257510661-96ki5slnuir29qco5s3vu727siqasgil.apps.googleusercontent.com

// USEFUL GAPI COMMANDS
// gapi.load('client:auth2')
// gapi.client.init({clientId: ''})

// gapi.auth2.getAuthInstance().signOut()
// gapi.auth2.getAuthInstance().signIn()

// gapi.auth2.getAuthInstance().isSignedIn.get()
// gapi.auth2.getAuthInstance().isSignedOut.get()

// ---------- GAPI contains an id for each user that you can use in your app
// gapi.auth2.getAuthInstance().currentUser
// gapi.auth2.getAuthInstance().currentUser.get().getId()