import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchPost, updatePost } from '../../actions';
import Header from '../layout/Header';
import ShortInputForm from '../inputforms/ShortInputForm';
import LongInputForm from '../inputforms/LongInputForm';

class EditPost extends React.Component{
state = {
  name: '',
  title: '',
  body:'',
  id: '',
  subMessage: null,
  msgType: null,
}

  async componentDidMount(){
    const { id } = this.props.match.params;
    await this.props.fetchPost(id);

    const { name, title, body } = this.props.post.data;
    this.setState({ name, title, body, id});
  }

  onChange = e => {this.setState({[e.target.name]: e.target.value})}

  onClickUpdate = async () => {
    const {name, title, body, id} =this.state
    if(name !=='' && title !=='' && body !=='' && id !==''){
      await this.props.updatePost({ name, title, body, id})
    }
    
    //Get post from server and pass it into verifyUpdate function
    const response = await axios.get(`http://localhost:3001/posts/${this.state.id}`)
    this.verifyUpdate(response.data);
  }


  verifyUpdate = (data)=> {
    const {title, id, name, body } = this.state;

    // Verify That Post On Server Matches Current Component State
    if (  data.title === title &&
          data.name  === name  &&
          data.body  === body  &&
          JSON.stringify(data.id) === id ) 
        {
          this.setState({
            subMessage: 'Your Edits Have Been Submitted Successfully',
            msgType: 'verifiedDataMsg'
          });
       
          setTimeout(() => { this.setState({ subMessage: null });
                             this.props.history.push('/home');
                           }, 2500);
        }
        if (  data.title !== title ||
              data.name  !== name  ||
              data.body  !== body  ||
              JSON.stringify(data.id) !== id ) 
        {
          this.setState({
            subMessage: 'Failed To Submit Updates', 
            msgType: 'errorMsg'
          });
          setTimeout(() => { this.setState({ subMessage: null })
           }, 2000);
        }
  }

  render(){
    return(
      <div>
        <Header/>

      
      <div className="edit-post centering">
      <div className="grid-box"></div>
      <div className="content">
        <h1 className="page-title">Edit Post</h1>
        <div className={this.state.msgType}>{this.state.subMessage}</div>
        <form >
              <ShortInputForm 
                className="newpost-input text-title" 
                type="text" 
                name="title"
                placeholder="Enter Title"
                onChange={this.onChange}
                value={this.state.title}
              /> 
              <ShortInputForm 
                className="newpost-input text-title" 
                type="text" 
                name="name"
                placeholder="Enter Name"
                onChange={this.onChange}
                value={this.state.name}
              /> 
              <LongInputForm 
                  className="newpost-input text-body" 
                  placeholder="Enter Text Body Here"
                  type="text"
                  name="body"
                  onChange={this.onChange}
                  value={this.state.body}
                />
        </form>
        <div className="button-container">
              <button 
                className="submit-btn btn" 
                type="submit" 
                onClick={this.onClickUpdate}
              >Submit
              </button>
            </div>
      </div>
      <div className="grid-box"></div>
    </div>
    </div>
    )
  }
}

const mapStateToProps= (state) =>{
  return {
  post: state.crudReducer.post
  }
}

export default connect(mapStateToProps, { fetchPost, updatePost})(EditPost);