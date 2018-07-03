import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { getArticleById, getCommentsByArticle } from '../components/api';

class ArticleView extends Component {
  state = {
    article: {},
    comments: [],
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
    getCommentsByArticle(this.props.match.params.articleId).then(
      commentData => {
        console.log(commentData, 'mounted', articleId);
        this.setState({
          comments: commentData.comments
        });
      }
    );
  }
  render() {
    console.log('render');
    const { title, body } = this.state.article;
    const { comments } = this.state;
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
              <h1>{title}</h1>  
              <p id="ArticleBody">{body}</p>
              {comments.map(comment => {
                return (
                  <div>
                    <q id="CommentBody">{comment.body}</q>
                    <p>
                      {comment.created_by} &emsp; votes: {comment.votes}
                    </p>
                    <br />
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

export default ArticleView;
