import React, { Component } from 'react';
import { string, number } from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px',
  },
};

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }
  componentDidMount() {
    const stopper = `${this.props.text}...`;
    this.interval = window.setInterval(
      () =>
        this.state.text === stopper
          ? this.setState(() => ({ text: this.props.text }))
          : this.setState(prevState => ({ text: `${prevState.text}.` })),
      this.props.speed
    );
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return <p style={styles.content}>{this.state.text}</p>;
  }
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
};

Loading.propTypes = {
  text: string.isRequired,
  speed: number.isRequired,
};

export default Loading;
