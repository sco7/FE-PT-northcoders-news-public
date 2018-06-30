import React from 'react';

import { getAllTopics } from './api';

class TopicsFeed extends React.Component {
  state = {
    topics: [],
    loading: true
  };
  componentDidMount() {
    console.log('loading');
    getAllTopics()
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
      <div>
      {this.state.loading ? (
          <p>Newsfeed loading........</p>
        ) : (
      <form id="TopicsFeed">
        <h2>Topics</h2>
        {topics.map(topic => {
          return (
              <Topic id='topics'
                topic={topic.title}
                
              />
          );
        })}
      </form>
        )}
        </div>
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

export default TopicsFeed;