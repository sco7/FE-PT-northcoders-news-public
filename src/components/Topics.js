import React from 'react';

class Topics extends React.Component {
  state = {
    topics: [],
    loading: true
  };
  componentDidMount() {
    console.log('loading');
    fetch('https://young-reef-95329.herokuapp.com/api/topics')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(body => {
        this.setState({
          topics: body.topics,
          loading: false
        });
      });
  }
  render() {
    console.log('render');
    const { topics } = this.state;
    return (
      <form id="Topics">
        <h2>Topics</h2>
        {topics.map(topic => {
          //if (tweet.user.name === 'Northcoders Students')
          return (
              <Topic id='topics'
                //profileImage={tweet.user.profile_image_url}
                topic={topic.title}
                //votes={article.votes}
                //comments={article.comment_count}
                //tweet={tweet.text}
                //date={tweet.created_at}
              />
          );
        })}
      </form>
    );
  }
}

const Topic = props => {
  return (
    <div>
      <span>
        <p>{props.topic}</p>
      </span>
    </div>
  );
};

export default Topics;