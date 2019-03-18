import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts, deletePost } from '../../actions';
import SideMenu from '../layout/SideMenu';
import DeletePost from './DeletePost';
import Modal from '../modal/Modal';
import '../../styles/poststyle.css';

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
              <h2>{post.title}</h2>
              <div className="btns-info">
                <div className="info">
                <p>By: {post.name} on {post.date}</p>
                </div>
                <div className="btns-wrapper">
                  <Link to={`/editpost/${post.id}`} className="btn">Edit</Link>
                    <Modal modalTitle="Delete" className="m1">
                      <DeletePost id={post.id}/>
                    </Modal>
                </div>
              </div>
              <p>{post.body}</p>
              <hr/>
            </div>
          )
        })
      }
  }

  render(){
    return(
      <div className="post-list container">
        <SideMenu/>
        <div className="content">
          { this.renderPosts() }
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