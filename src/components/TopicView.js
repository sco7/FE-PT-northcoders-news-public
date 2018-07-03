import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { getArticlesByTopic } from './api';

class TopicView extends Component {
  state = {
    articles: {},
    loading: true
  };

  componentDidMount() {
    console.log('loading');
    const { topicId } = this.props.match.params;
    console.log(topicId);
    getArticlesByTopic(this.props.match.params.topicId).then(articleData => {
      console.log(articleData, 'mounted', topicId);
      this.setState({
        articles: articleData.articles,
        loading: false
      });
    });
  }
  render() {
    console.log('render');
    const { articles } = this.state;
    return (
      <div>
        <nav>
          <Link to="/">Back</Link>
        </nav>
        {this.state.loading ? (
          <p>Articles loading........</p>
        ) : (
          <div class="row">
            <div class="col-sm" />
            <div class="col-8">
              <h2>Articles</h2>
              {articles.map(article => {
                return (
                  <div>
                    <h5>{article.title}</h5>
                    <p>{article.body}</p>
                  </div>
                );
              })}
            </div>
            <div class="col-sm" />
          </div>
        )}
      </div>
    );
  }
}

export default TopicView;
