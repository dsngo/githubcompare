import React from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { string, number, shape } from 'prop-types';
import api from '../utils/api';
import PlayerPreview from './PlayerPreview';
import Loading from '../components/Loading';

const Profile = props => {
  const info = props.info;
  return (
    <PlayerPreview avatar={info.avatar_url} username={info.login}>
      <ul className="space-list-items">
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </ul>
    </PlayerPreview>
  );
};

Profile.propTypes = {
  info: shape({}).isRequired,
};
const Player = props =>
  <div>
    <h1 className="header">{props.label}</h1>
    <h3 style={{ textAlign: 'center' }}>Score: {props.score}</h3>
    <Profile info={props.profile} />
  </div>;

Player.propTypes = {
  label: string.isRequired,
  score: number.isRequired,
  profile: shape().isRequired,
};

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    };
  }
  componentDidMount() {
    const players = queryString.parse(this.props.location.search);
    return api
      .battle([players.playerOneName, players.playerTwoName])
      .then(results => {
        if (!results) {
          return this.setState(() => ({
            error:
              'Looks like there was error. Check that if both users exist on Github.',
            loading: false,
          }));
        }
        return this.setState(() => ({
          error: null,
          winner: results[0],
          loser: results[1],
          loading: false,
        }));
      });
  }
  render() {
    const { error, winner, loser, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    }
    return (
      <div className="row">
        <Player label="Winner" score={winner.score} profile={winner.profile} />
        <Player label="Loser" score={loser.score} profile={loser.profile} />
      </div>
    );
  }
}
Results.propTypes = {
  location: shape().isRequired,
};

export default Results;
