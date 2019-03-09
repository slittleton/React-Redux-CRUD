import React from 'react';
import SideMenu from '../layout/SideMenu';
import { fetchPosts, fetchPost, updatePost } from '../../actions';
import { connect } from 'react-redux';

class EditPost extends React.Component{
state = {
  name: '',
  title: '',
  body:'',
  id: ''
}

  async componentDidMount(){
    const { id } = this.props.match.params;
    await this.props.fetchPost(id)
      .then(()=>{
        const { name, title, body } = this.props.post.data

        this.setState({
          name: name,
          title: title,
          body: body,
          id: id
        })
      })
  }


  onChange = e => this.setState({[e.target.name]: e.target.value});

  onClickUpdate = () => {
    const {name, title, body, id} =this.state
    if(name !=='' && title !==''&& body !==''&& id !==''){

      this.props.updatePost(this.state);

    }
    
    //TODO notify user that submission success, Redirect to home

  }

  render(){
    return(
      <div className="edit-post container">
      <SideMenu/>

      <div className="content">
        <h1 className="page-title">Create A New Post</h1>
        <form onSubmit={this.updatePost}>
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
        </form>
        <div className="button-container">
              <button 
              className="submit-post"
              type="submit"
              onClick={this.onClickUpdate}
              >Submit</button>
            </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps= (state) =>{
  // console.log(state);
  return {
  post: state.crudReducer.post
  }
}

export default connect(mapStateToProps, {fetchPosts, fetchPost, updatePost} )(EditPost);