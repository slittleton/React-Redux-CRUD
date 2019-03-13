import React from 'react';
import SideMenu from '../layout/SideMenu';
import '../../styles/components.css';
import { createPost } from '../../actions';
import { connect } from 'react-redux';

class CreatePost extends React.Component{
  state= {
    title: '',
    body: '',
    name: ''
  }

  onChange = (e) => {this.setState({[e.target.name]: e.target.value})}

  publishPost =  (e) => {
    e.preventDefault();
    
    const { title, name, body } = this.state;
    let time = new Date();

    const newPost = {
      title, body, name,
      date: `${Number(time.getMonth())+1}-${time.getDate()}-${time.getFullYear()}`,
    }
     this.props.createPost(newPost);
  }

  verifyNewPost (newProps, callback){
    const { title, body, name} = this.state;
    const { post } = newProps;
    if( post.title === title && 
        post.body  === body  && 
        post.name  === name  &&
        Boolean(post.id) === true ){

      callback ('Successfully Posted', 'verifiedDataMsg','/', newProps)
    } else {
      callback ('Failed To Post', 'errorMsg', '/', newProps)
    }
  }

  render(){
    let subMessage = null;
    let msgType = null;

    function setSubmissionMessage (msg, cssClass, route, props){
      subMessage = msg;
      msgType = cssClass;
      setTimeout(()=>{
        subMessage = null;
        msgType = null;
        if ( route ){ props.history.push(route) }
      }, 2500)
    }
    const { post } = this.props;

    return(
      <div className="create-post container">
        <SideMenu/>
        <div className="content">
          <h1 className="page-title">Create A New Post</h1>
          {/* Verify if the post is successful and inform user */}
          {post.id ? this.verifyNewPost(this.props, setSubmissionMessage ): null}
          <div className={msgType}>{subMessage}</div>
          <form onSubmit={this.publishPost}>
            <div className="form-field">
              <div>
              </div>
              <div className="field">
                <input 
                  className="newpost-input text-title" 
                  type="text" 
                  name="title"
                  placeholder="Enter Title"
                  onChange={this.onChange}
                  value={this.state.title}
                /> 
              </div>
              <div className="field">
                <input 
                  className="newpost-input text-title" 
                  type="text" 
                  name="name"
                  placeholder="Enter Name"
                  onChange={this.onChange}
                  value={this.state.name}
                /> 
              </div>

            </div>
            <div className="form-field">
                <div className="field">
                <textarea 
                    className="newpost-input text-body" 
                    placeholder="Enter Text Body Here"
                    type="text"
                    name="body"
                    onChange={this.onChange}
                    value={this.state.body}
                  />
                </div>
              </div>
              <div className="button-container">
                <button 
                className="submit-post"
                type="submit"
                >Submit</button>
              </div>
          </form>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const  { post } = state.crudReducer
  return {
    post: Object.assign({}, post)
  }
}

export default connect(mapStateToProps, {createPost})(CreatePost);