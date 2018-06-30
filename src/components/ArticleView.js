import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { getArticleById } from '../components/api';

class ArticleView extends Component {
  state = {
    article: {},
    loading: true
  };

  componentDidMount() {
    console.log('loading');
    const { articleId } = this.props.match.params;
    console.log(articleId);
    getArticleById(this.props.match.params.articleId)
      .then(articleData => {
        console.log(articleData, 'mounted', articleId);
        this.setState({
        article: articleData.articles[0],
        loading: false
      });
    });
  }
  render() {
    console.log('render');
    const { title, body, loading } = this.state.article;
    return (
      <div>
       <nav>
            <Link to="/">Back</Link>
          </nav>
        {this.state.loading ? (
          <p>Article loading........</p>
        ) : (
          <div class="row">
            <div class="col-sm" />
            <div class="col-8">
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
            <div class="col-sm" />
          </div>
        )}
      </div>
    );
  }
}

export default ArticleView;
