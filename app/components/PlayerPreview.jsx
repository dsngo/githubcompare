import React from 'react';
import { string, shape } from 'prop-types';

const PlayerPreview = props =>
  <div>
    <div className="column">
      <img
        src={props.avatar}
        alt={`Avatar for ${props.username}`}
        className="avatar"
      />
      <h2 className="username">@{props.username}</h2>
    </div>
    {props.children}
  </div>;

PlayerPreview.propTypes = {
  avatar: string.isRequired,
  username: string.isRequired,
  children: shape({}).isRequired,
};

export default PlayerPreview;
