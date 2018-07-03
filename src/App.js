import React, { Component } from 'react';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticleView from './components/ArticleView';
import Navbar from './components/navbar';
import UserView from './components/UserView';
import TopicView from './components/TopicView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <div>
          <div>
            <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles/:articleId" component={ArticleView} />
            <Route path="/users/:userId" component={UserView} />
            <Route path="/articles/:articleId/comments" component={ArticleView} />
            <Route path="/topics/:topicId/articles" component={TopicView} />
          </Switch>
        </div>
        </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
