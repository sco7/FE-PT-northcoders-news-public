import React from 'react';
import { Link } from 'react-router-dom';
import { getAllTopics } from './api';

class TopicsFeed extends React.Component {
  state = {
    topics: [],
    loading: true
  };
  
  componentDidMount() {
    console.log('loading');
    getAllTopics().then(body => {
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
          <p>Topics loading........</p>
        ) : (
          <form id="TopicsFeed">
            <h2>Topics</h2>
            {topics.map(topic => {
              return (
                <div id="TopicsFeedRollUp" key={topic.title}>
                  <Link to={`/topics/${topic._id}/articles`}>
                    <p>{topic.title}</p>
                  </Link>
                </div>
              );
            })}
          </form>
        )}
      </div>
    );
  }
}

export default TopicsFeed;
