import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUserById } from './api';

class UserView extends Component {
  state = {
    user: {},
    loading: true
  };

  componentDidMount() {
    console.log('loading');
    const { userId } = this.props.match.params;
    console.log(userId);
    getUserById(this.props.match.params.userId).then(userData => {
      console.log(userData, 'mounted', userId);
      this.setState({
        user: userData.users[0],
        loading: false
      });
    });
  }

  render() {
    console.log('render');
    const { username, name, avatar_url } = this.state.user;
    return (
      <div>
        <nav>
          <Link to="/">Back</Link>
        </nav>
        {this.state.loading ? (
          <p>User loading........</p>
        ) : (
          <div class="row">
            <div class="col-sm" />
            <div class="col-4">
              <img src={avatar_url} alt="avatar" />
              <h2>{username}</h2>
              <p>{name}</p>
            </div>
            <div class="col-sm" />
          </div>
        )}
      </div>
    );
  }
}

export default UserView;
