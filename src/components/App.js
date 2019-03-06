import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import '../styles/app.css';

import Header from './layout/Header';

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
        <Header/>
        <Route path="/" exact component={Home} />
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