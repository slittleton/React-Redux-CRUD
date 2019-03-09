import React from 'react';
import SideMenu from '../layout/SideMenu';
import { fetchPosts, deletePost } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/poststyle.css';

class PostList extends React.Component{
  componentDidMount(){
    this.props.fetchPosts();
  }

  onDelete = (id) => {
    this.props.deletePost(id);
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
                  <button className="btn" onClick={() => this.onDelete(post.id)}>Delete</button>
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