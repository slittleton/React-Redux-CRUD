import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';
import vz from '../../assets/vz.png';
import { connect } from 'react-redux';

class LandingPage extends React.Component {
  render(){
    return(
      <div className="landing-main">
        <div className="back-pic">
          <div className="grid">
          <div className="grid-box1"></div>
          <div className="grid-box-center">
            <div className="logins">
              <div className="login-type">
                <Link className="landing-oauth" to="/home">Login as Guest</Link>
              </div>
              <div className="login-type" >
                <GoogleAuth classNames="landing-oauth" waitForSignIn={true} history={this.props.history}/>
              </div>
            </div>
          </div>
          <div className="grid-box3"></div>
          <div className="img-container">
          <img src={vz} alt="vz"/>
        </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { signInStatus: state.authReducer.signInStatus }
}

export default connect(mapStateToProps)(LandingPage);