import React from 'react';
import { Link } from 'react-router-dom';

import { getAllArticles } from '../components/api';

class NewsFeed extends React.Component {
  state = {
    articles: [],
    loading: true
  };
  componentDidMount() {
    console.log('loading');
    getAllArticles()
      .then(body => {
        this.setState({
          articles: body.articles,
          loading: false
        });
      });



  }
  render() {
    console.log('render');
    const { articles } = this.state;
    return (
      <div>
      {this.state.loading ? (
          <p>Newsfeed loading........</p>
        ) : (
      <form id="NewsFeed">
        <h2 id ="NewsFeedTitle">NewsFeed</h2>
        {articles.map(article => {
          return (
            <div id='NewsFeedRollUp' key={article._id}>
              <Link to={`/articles/${article._id}`}>
                <h5>{article.title}</h5>
              </Link>
              <br />
              <p>
                comments: {article.comment_count} &emsp; votes: {article.votes}
              </p>
            </div>
          );
        })}
      </form>
        )}
      </div>
    );
  }
}

export default NewsFeed;
