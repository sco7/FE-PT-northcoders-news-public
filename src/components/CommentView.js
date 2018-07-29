import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getCommentById,
  putCommentVotesByIdLike,
  putCommentVotesByIdDislike,
  deleteCommentById
} from '../components/api';

class CommentView extends Component {
  state = {
    comment: {},
    loading: true
  };

  handleCommentClickVoteLike = event => {
    event.preventDefault();
    putCommentVotesByIdLike(this.props.match.params.commentId).then(res => {
      this.setState({
        comment: res.comment
      });
    });
  };

  handleCommentClickVoteDislike = event => {
    event.preventDefault();
    putCommentVotesByIdDislike(this.props.match.params.commentId).then(res => {
      this.setState({
        comment: res.comment
      });
    });
  };

  handleCommentDeleteComment = event => {
    event.preventDefault();
    deleteCommentById(this.props.match.params.commentId).then(res => {
      this.setState({
        comment: res.comment
      });
    });
  };

  componentDidMount() {
    console.log('loading');
    const { commentId } = this.props.match.params;
    console.log(commentId);
    getCommentById(this.props.match.params.commentId).then(commentData => {
      console.log(commentData, 'mounted', commentId);
      this.setState({
        comment: commentData.comment,
        loading: false
      });
    });
  }

  render() {
    console.log('render');
    const { body, votes } = this.state.comment;
    return (
      <div>
        <nav>
          <Link to={`/`}>Back</Link>
        </nav>
        {this.state.loading ? (
          <p>Comment loading........</p>
        ) : (
          <div class="row">
            <div class="col-sm" />
            <div class="col-8">
              <h3>Comment</h3>
              <p id="CommentBody">{body}</p>
              <p>
                votes: {votes} &emsp;
                <button
                  id="likeComment"
                  onClick={this.handleCommentClickVoteLike}
                >
                  Like
                </button>{' '}
                &emsp;
                <button
                  id="dislikeComment"
                  onClick={this.handleCommentClickVoteDislike}
                >
                  Dislike
                </button>
                &emsp;
                <button
                  id="deleteComment"
                  onClick={this.handleCommentDeleteComment}
                >
                  <Link to="/">Delete Comment</Link>
                </button>
              </p>
            </div>
            <div class="col-sm" />
          </div>
        )}
      </div>
    );
  }
}

export default CommentView;
