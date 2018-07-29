import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postCommentToArticle } from './api';

class AddNewComment extends Component {
  state = {
    comment: ''
  };

  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  submitComment = event => {
    event.preventDefault();
    let comment = event.target.value;
    let articleId = this.props.match.params.articleId;
    console.log(articleId);
    postCommentToArticle(articleId, comment).then(res => {
      this.setState({
        comment: ''
      });
    });
  };

  render() {
    return (
      <div>
        <nav>
          <Link to={`/articles/${this.props.match.params.articleId}/comments`}>
            Back
          </Link>
        </nav>

        <div class="row">
          <div class="col-sm" />
          <div class="col-6">
            <div className="commentBox">
              <label>Enter your comment</label>
              <div>
                <textarea
                  rows="5"
                  cols="70"
                  className="textarea"
                  placeholder="Add Comment"
                  onChange={this.handleChange}
                  value={this.state.comment}
                />
                <div>
                  <button
                    className="button"
                    type="submit"
                    id={this.props.articleId}
                    onClick={this.submitComment}
                    value={this.state.comment}
                  >
                    {' '}
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm" />
        </div>
      </div>
    );
  }
}

export default AddNewComment;
