import React, { Component } from 'react';
import Like from '../like.svg';
import './Tweet.css';

export default class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tweet } = this.props;

    return (
      <li className="tweet">
        <strong>{tweet.author}</strong>
        <p>{tweet.content}</p>
        <button type="button">
          <img src={Like} alt="Like" />
          {tweet.likes}
        </button>
      </li>
    );
  }
}
