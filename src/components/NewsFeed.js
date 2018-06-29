import React from 'react';
import { Link } from 'react-router-dom';

class NewsFeed extends React.Component {
  state = {
    articles: [],
    loading: true
  };
  componentDidMount() {
    console.log('loading');
    fetch('https://young-reef-95329.herokuapp.com/api/articles')
      .then(res => {
        console.log(res);
        return res.json();
      })
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
      <form id="NewsFeed">
        <h2>NewsFeed</h2>
        {articles.map(article => {
          return (
            <div key={article._id}>
              <Link to={`/articles/${article._id}`}>
                <h6>{article.title}</h6>
              </Link>
              <p>
                comments: {article.comment_count} &emsp; votes: {article.votes}
              </p>
            </div>
          );
        })}
      </form>
    );
  }
}

export default NewsFeed;
