import React, { Component } from 'react';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SingleArticleView from './components/ArticleView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Northcoders News</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/articles/:articleId" component={SingleArticleView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
