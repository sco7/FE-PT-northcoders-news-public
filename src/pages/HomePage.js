import React, { Component } from 'react';

import NewsFeed from '../components/NewsFeed';
import TopicsFeed from '../components/TopicsFeed';
import UserFeed from '../components/UserFeed';

class HomePage extends Component {
  render() {
    return (
          <div class="row">
          <div class="col-sm">
            <TopicsFeed />
            <UserFeed />
          </div>
          <div class="col-6">
            <NewsFeed />
            </div>
            <div class="col-sm">
              
            </div>
      </div>

    );
  }
}

export default HomePage;
