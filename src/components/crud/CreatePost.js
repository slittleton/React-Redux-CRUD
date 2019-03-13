import React from 'react';
import SideMenu from '../layout/SideMenu';
import '../../styles/components.css';
import { createPost } from '../../actions';
import { connect } from 'react-redux';

class CreatePost extends React.Component{
  state= {
    title: '',
    body: '',
    name: '',
    subMessage: null,
    msgType: null,
    update: null
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


// -----------------------------TODO USING getDerivedStateFromProps----------------------------------
  // static getDerivedStateFromProps(nextProps, prevState){
  //   // console.log('NextProps: ')
  //   // console.log(nextProps.post);
  //   // console.log('PrevState: ')
  //   // console.log(prevState);
  //   if(nextProps.post.id){

  //     return {update: CreatePost.check(nextProps, prevState)}
  //   }
  //   return null
  // }
  // static check (nextProps, prevState){
  //   const { title, body, name} = prevState;
  //   const { post } = nextProps;
  //   if( post.title === title && 
  //     post.body  === body  && 
  //     post.name  === name  &&
  //     Boolean(post.id) === true ){
  //       console.log('logged props update')
  //       this.setSubmissionMessage ('Successfully Posted', 'verifiedDataMsg')
  //     }
  // }


  // static verifyNewPost2 (nextProps, prevState){
  //   const { title, body, name} = prevState;
  //   const { post } = nextProps;
  //   if( post.title === title && 
  //       post.body  === body  && 
  //       post.name  === name  &&
  //       Boolean(post.id) === true ){

  //     this.setSubmissionMessage2 ('Successfully Posted', 'verifiedDataMsg','/')
  //   } else {
  //     this.setSubmissionMessage ('Failed To Post', 'errorMsg')
  //   }
  // }
  // setSubmissionMessage2 (msg, cssClass, route) {
  //   return {
  //     subMessage: msg,
  //     msgType: cssClass
  //   };
    
  //   // setTimeout(() => { 
  //   //   this.setState({ subMessage: null, msgType: null });
  //   //   if(route){ this.navigateToPage(route) };
  //   // }, 2500);
  // }
// ---------------------------------------------------------------

  componentWillReceiveProps(nextProps){
    if(nextProps){this.verifyNewPost(nextProps)}
  }

  verifyNewPost (nextProps){
    const { title, body, name} = this.state;
    const { post } = nextProps;
    if( post.title === title && 
        post.body  === body  && 
        post.name  === name  &&
        Boolean(post.id) === true ){

      this.setSubmissionMessage ('Successfully Posted', 'verifiedDataMsg','/')
    } else {
      this.setSubmissionMessage ('Failed To Post', 'errorMsg')
    }
  }

  navigateToPage(route){
    this.props.history.push(route);
  }

  setSubmissionMessage (msg, cssClass, route) {
    this.setState({
      subMessage: msg,
      msgType: cssClass
    });
    
    setTimeout(() => { 
      this.setState({ subMessage: null, msgType: null });
      if(route){ this.navigateToPage(route) };
    }, 2500);
  }

  render(){
    return(
      <div className="create-post container">
        <SideMenu/>
        <div className="content">
          <h1 className="page-title">Create A New Post</h1>
          <div className={this.state.msgType}>{this.state.subMessage}</div>
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
  // console.log(state)
  const  { post } = state.crudReducer
  return {
    post: Object.assign({}, post)
  }
}

export default connect(mapStateToProps, {createPost})(CreatePost);