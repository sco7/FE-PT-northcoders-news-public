import React, { Component } from 'react';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SingleArticleView from './components/ArticleView';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <div>
          <div>
            <Navbar />
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/articles/:articleId" component={SingleArticleView} />
          </Switch>
        </div>
        </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
