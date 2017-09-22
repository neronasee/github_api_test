import React, { PureComponent } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadProfile} from '../actions/profile';
import ProfileInfo from '../components/profile/ProfileInfo';

class UserProfile extends PureComponent {
  componentDidMount() {
    this.props.loadProfile(this.props.params.username);
  }

  renderProfile() {
    const { fetching, data, err } = this.props.profile;
    if (fetching || !data) {
      return <h2 className='text-center'>Loading...</h2>
    } else if (err) {
      return <h2 className='text-center'>{this.props.profile.err}</h2>
    } else {
      
      return <ProfileInfo data={data}/>
    }
  }

  render() {
    return(
      <div>
        <Link to="/" className="btn btn-danger">Back</Link>
        {this.renderProfile()}
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