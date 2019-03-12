import React from 'react';
import SideMenu from '../layout/SideMenu';
import '../../styles/components.css';
import { createPost } from '../../actions';
import { connect } from 'react-redux';
import axios from 'axios';

class CreatePost extends React.Component{
  state= {
    title: '',
    body: '',
    name: '',
    submitMsg: null
  }

  onChange = (e) => {this.setState({[e.target.name]: e.target.value})}

  publishPost = async (e) => {
    e.preventDefault();
    
    const { title, name, body } = this.state;
  
    let time = new Date();

    const newPost = {
      title, body, name,
      date: `${Number(time.getMonth())+1}-${time.getDate()}-${time.getFullYear()}`,
    }

    await this.props.createPost(newPost);
    // const response = await axios.get(`http://localhost:3001/posts`);


    // console.log(this.props)
    // console.log(response.data)
    // console.log(this.state)
    // this.setState({
    //   title:'', body:'', name: '', submitMsg: null
    // })
  }


  render(){
    return(
      <div className="create-post container">
        <SideMenu/>
        <div className="content">
          <h1 className="page-title">Create A New Post</h1>
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
  return {
    post: state.crudreducer
  }
}

export default connect(mapStateToProps, {createPost})(CreatePost);