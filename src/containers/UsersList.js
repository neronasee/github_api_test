import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import SingleUser from '../components/users/SingleUser';
import {loadUsers} from '../actions/users';

class UsersList extends Component {
  constructor() {
    super();

    this.handleUserClick = this.handleUserClick.bind(this);
  }
  componentDidMount() {
    this.props.loadUsers();
  }

  handleUserClick(user) {
    browserHistory.push(`users/${user}`)
  }

  renderUsers() {
    const {fetching, list, err} = this.props.users;
    
    if (fetching) {
      return <h2 className='text-center'>Loading...</h2>
    } else if (err) {
      return <h2 className='text-center'>{this.props.users.err}</h2>
    }

    return list.map((user) => {
      return <SingleUser handleUserClick={this.handleUserClick} key={user.login} data={user} />
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Users list</h2>
        <ul className="list-group">
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loadUsers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
