import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import '../styles/app.css';

import LandingPage from './layout/LandingPage';
import Home from './crud/Home';
import PostList from './crud/PostList';
import EditPost from './crud/EditPost';
import DeletePost from './crud/DeletePost';
import CreatePost from './crud/CreatePost';

const App = () => {
  return(
    <div className="app">
    <BrowserRouter>
      <div className="routes">
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/postlist" exact component={PostList} />
        <Route path="/editpost/:id" exact component={EditPost} />
        <Route path="/deletepost/:id" exact component={DeletePost} />
        <Route path="/createpost" exact component={CreatePost} />
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App;