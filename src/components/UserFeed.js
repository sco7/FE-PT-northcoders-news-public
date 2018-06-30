import React from 'react';

class UserFeed extends React.Component {
  state = {
    users: [],
    loading: true
  };
  componentDidMount() {
    console.log('loading');
    fetch('https://young-reef-95329.herokuapp.com/api/users')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(body => {
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
              <Topic id='users'
                users={user.name}
                
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
        <p>{props.users}</p>
      </span>
    </div>
  );
};

export default UserFeed;