import React from 'react';
import { connect } from 'react-redux';

import '../../styles/components.css';
import { createPost } from '../../actions';

import SideMenu from '../layout/SideMenu';
import ShortInputForm from '../inputforms/ShortInputForm';
import LongInputForm from '../inputforms/LongInputForm';

class CreatePost extends React.Component{
  state= {
    title: '',
    body: '',
    name: '',
    error: ''
  }

  onChange = (e) => {this.setState({[e.target.name]: e.target.value})}

  publishPost =  (e) => {
    e.preventDefault();
    
    const { title, name, body } = this.state;
    if ( title !== '' && body !== '' && name !== ''){
      let time = new Date();
      const newPost = {
        title, body, name,
        date: `${Number(time.getMonth())+1}-${time.getDate()}-${time.getFullYear()}`,
      }
       this.props.createPost(newPost);
    } 
    if ( title === '' || body === '' || name === '') {
      this.noEmptyFields()
    }
  }

  noEmptyFields(){
    this.setState({error: 'All Fields Must Not Be Filled'})
    setTimeout(()=>{this.setState({error: ''})}, 2000)
  }

  verifyNewPost (newProps, submissionMessage){
    const { title, body, name} = this.state;
    const { post } = newProps;
    if( post.title === title && 
        post.body  === body  && 
        post.name  === name  &&
        Boolean(post.id) === true ){

      submissionMessage('Successfully Posted', 'verifiedDataMsg','/');
      this.navigate('/');

    } else {
      submissionMessage('Failed To Post', 'errorMsg');
      this.navigate(null);
    }
  }
 navigate(route){
  setTimeout(()=>{
    if (route) {this.props.history.push(route)
    } else if (route === null){window.location.reload()};
  }, 2001);
 }

  render(){
    let subMessage = null;
    let msgType = null;

    function submissionSuccess (msg, cssClass,route){
      subMessage = msg;
      msgType = cssClass;
      setTimeout(()=>{ subMessage = null; msgType = null }, 2000)
    }

    const { post } = this.props;


    return(
      <div className="create-post container">
        <SideMenu/>
        <div className="content">
          <h1 className="page-title">Create A New Post</h1>
          {/* Verify if the post is successful and inform user */}
          { post.id ? this.verifyNewPost(this.props, submissionSuccess) : null }
          <div className={msgType}>{subMessage}</div>
          <form onSubmit={this.publishPost}>
              <ShortInputForm
                className="newpost-input text-title" 
                type="text" 
                name="title"
                placeholder="Enter Title"
                onChange={this.onChange}
                value={this.state.title}
                error={this.state.error}
              />
              <ShortInputForm 
                className="newpost-input text-title" 
                type="text" 
                name="name"
                placeholder="Enter Name"
                onChange={this.onChange}
                value={this.state.name}
                error={this.state.error}
              /> 
              <LongInputForm 
                className="newpost-input text-body" 
                placeholder="Enter Text Body Here"
                type="text"
                name="body"
                onChange={this.onChange}
                value={this.state.body}
                error={this.state.error}
              />
              <div className="button-container">
                <button className="submit-post"type="submit">Submit</button>
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