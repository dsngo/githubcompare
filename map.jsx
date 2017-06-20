import React from 'react';
import ReactDOM from 'react-dom';
import { string } from 'prop-types';

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {this.props.list.filter(n => n.friend).map(f => <li>{f.name}</li>)}
        </ul>
        <hr />

        <h1> Non Friends </h1>
        <ul>
          {this.props.list.filter(n => !n.friend).map(f => <li>{f.name}</li>)}
        </ul>
      </div>
    );
  }
}

Users.propTypes = {
  list: string.isRequired,
};

ReactDOM.render(
  <Users
    list={[
      { name: 'Tyler', friend: true },
      { name: 'Ryan', friend: true },
      { name: 'Michael', friend: false },
      { name: 'Mikenzi', friend: false },
      { name: 'Jessica', friend: true },
      { name: 'Dan', friend: false },
    ]}
  />,
  document.getElementById('app')
);
