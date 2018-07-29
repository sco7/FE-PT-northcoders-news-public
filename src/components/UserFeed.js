import React from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from './api';

class UserFeed extends React.Component {
  state = {
    users: [],
    loading: true
  };

  componentDidMount() {
    console.log('loading');
    getAllUsers().then(body => {
      this.setState({
        users: body.users,
        loading: false
      });
    });
  }

  render() {
    console.log('render');
    const { users } = this.state;
    return (
      <div>
        {this.state.loading ? (
          <p>Users loading........</p>
        ) : (
          <form id="UserFeed">
            <h2>Users</h2>
            {users.map(user => {
              return (
                <div id="UserFeedRollUp" key={user.name}>
                  <Link to={`/users/${user.username}`}>
                    <p>{user.name}</p>
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

export default UserFeed;
