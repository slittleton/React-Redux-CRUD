import React from 'react';
import Header from '../layout/Header';
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
          <div className="section-title">Most Recent Post</div>
          <div key={post.id} className="posts-container">
            <h3 className="post-title">{post.title}</h3>
            <p>By: {post.name} on {post.date}</p>
            <p>{post.body}</p>
          </div>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
      <Header/>
      <div className="home ">
        <div className="grid-box"></div>
        <div className="content">
          {this.mostRecentPost()}
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

export default connect(mapStateToProps, {fetchPosts,fetchPost})(Home);

