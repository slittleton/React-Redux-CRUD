import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts, deletePost } from '../../actions';
import DeletePost from './DeletePost';
import Modal from '../modal/Modal';
import Header from '../layout/Header';

class PostList extends React.Component{
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts = ()=> {
    const {posts} = this.props
      if(posts){
        return posts.map(post=>{
          return(
            <div key={post.id} className="posts-container">

              
              <div className="box">
              <p className="post-title">{post.title}</p>
                <div className="postname-wrapper">
                  <p className="post-name">By: {post.name} on {post.date}</p>
            
                  <div className="btn-wrapper">
                    <Link to={`/editpost/${post.id}`} className="btn-wrapper btn">Edit</Link>
                    <Modal modalTitle="Delete" className="btn-wrapper">
                      <DeletePost id={post.id}/>
                    </Modal>
                  </div>
                  </div>

                
              </div>
              <p className="post-body">{post.body}</p>

            </div>
          )
        })
      }
  }

  render(){
    return(
      <div>
        <Header/>
      <div className="post-list container">
        <div className="grid-box"></div>

        <div className="content">
          { this.renderPosts() }
        </div>
        
        <div className="grid-box"></div>
      </div>
      </div>
    )
  }
}

const mapStateToProps= (state) =>{
  return {
  posts: state.crudReducer.posts
  }
}

export default connect(mapStateToProps, {fetchPosts,deletePost})(PostList);