import React, { PureComponent } from 'react';

import '../../styles/singleUser.css';

class SingleUser extends PureComponent {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleUserClick(this.props.data.login);
  }

  render() {
    const { login, html_url, avatar_url } = this.props.data;

    return (
      <li className="single-user list-group-item" onClick={this.handleClick}>
        <div className="row">
          <div className="col-xs-3">
            <img className="img-thumbnail" alt='avatar' height="100" width="100" src={avatar_url} />
          </div>
          <div className="col-xs-9">
            <div className="single-user__login">{login}</div>
            <div className="single-user__profile">
              <a href={html_url}>Visit Github Profile</a>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default SingleUser;
