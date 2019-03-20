import React from 'react';
import SideMenu from '../layout/SideMenu';
import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from '../../actions';

class Home extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  
  mostRecentPost(){
    const {posts} = this.props;
    if(posts.length>0){
      let maxId = Math.max(...posts.map( post => { return post.id }))
      let post = posts.filter( post => post.id === maxId)[0];
 
      return (
        <div>
          <h2 className="post-title">Most Recent Post</h2>
          <div key={post.id} className="posts-container">
            <h3 className="post-title">{post.title}</h3>
            <p>By: {post.name} on {post.date}</p>
            <p>{post.body}</p>
            <hr/>
          </div>
        </div>
      )
    }
  }

  render(){
    return(
      <div className="home container">
        <div className="content">
          {this.mostRecentPost()}
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

export default connect(mapStateToProps, {fetchPosts,fetchPost})(Home);

