import React from 'react';

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
          //if (tweet.user.name === 'Northcoders Students')
          return (
              <Article id='articles'
                //profileImage={tweet.user.profile_image_url}
                article={article.title}
                votes={article.votes}
                comments={article.comment_count}
                //tweet={tweet.text}
                //date={tweet.created_at}
              />
          );
        })}
      </form>
    );
  }
}

const Article = props => {
  return (
    <div>
      <span>
        <h6>{props.article}</h6>
        <p>votes {props.votes}  &nbsp; &nbsp; &nbsp; comments {props.comments}</p>
      </span>
    </div>
  );
};

export default NewsFeed;