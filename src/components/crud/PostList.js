import React from 'react';
import SideMenu from '../layout/SideMenu';
import { fetchPosts } from '../../actions';
import { connect } from 'react-redux';
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
            <div key={post.id} className="asdf">
              <h2>{post.title}</h2>
              <p>By: {post.name} on {post.date}</p>
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
  posts: state.crudReducer
  }
}

export default connect(mapStateToProps, {fetchPosts})(PostList);