import React, { Component } from 'react';
import socket from 'socket.io-client';
import Tweet from '../components/Tweet';
import api from '../services/api';
import TwitterLogo from '../twitter.svg';
import './Timeline.css';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      newTweet: '',
    };
  }

  async componentDidMount() {
    this.subscribeToEnvents();

    const response = await api.get('tweets');
    this.setState({ tweets: response.data });
  }

  subscribeToEnvents() {
    const io = socket('https://twitter-clone-backend.herokuapp.com');
    io.on('tweet', (data) => {
      this.setState({ tweets: [data, ...this.state.tweets] });
    });

    io.on('like', (data) => {
      this.setState({
        tweets: this.state.tweets.map(
          tweet => (tweet._id === data._id ? data : tweet),
        ),
      });
    });
  }

  handleInputChange(e) {
    this.setState({ newTweet: e.target.value });
  }

  async handleNewTweet(e) {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem('@GoTwitter:username');

    await api.post('tweets', { content, author });
    this.setState({ newTweet: '' });
  }

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={TwitterLogo} alt="Twitter" />
        <form action="">
          <textarea
            value={this.state.newTweet}
            onChange={e => this.handleInputChange(e)}
            onKeyDown={e => this.handleNewTweet(e)}
            placeholder="O que está acontecendo?"
          />
        </form>
        <ul className="tweet-list">
          {this.state.tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </ul>
      </div>
    );
  }
}
