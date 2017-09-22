import React from 'react';

const ProfileInfo = (props) => {
  const {
    name,
    followers,
    following,
    created_at,
    company,
    email,
    location,
    blog,
    bio,
    avatar_url,
  } = props.data;

  const defaultInfo = 'No info';

  return (
    <div className="text-center">
      <h4>Name: {name}</h4>
      <img src={avatar_url} alt="avatar"/>
      <p>
        followers: {followers},
        following: {following}
      </p>
      <p>Created at: {created_at}</p>
      <p>
        company: {company || defaultInfo},
        email: {email || defaultInfo},
        location: {location || defaultInfo}
      </p>
      <p>
        blog: {blog || defaultInfo},
        bio: {bio || defaultInfo}
      </p>
    </div>
  )
};

export default ProfileInfo;
