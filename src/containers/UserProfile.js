import React, { PureComponent } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadProfile} from '../actions/profile';

class UserProfile extends PureComponent {
  componentDidMount() {
    this.props.loadProfile();
  }
  render() {
    const {
      name, 
      followers, 
      following, 
      created_at, 
      company, 
      email, 
      location, 
      blog, 
      bio
    } = this.props.profile;
    
    return(
      <div>
        <Link to="/" className="btn btn-danger">Back</Link>
        <div>
          {name}
          {followers}
          {following}
          {created_at}
          {company}
          {email}
          {location}
          {blog}
          {bio}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loadProfile}, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

// TODO: take username from url