import React, { Component } from 'react';
import TwitterLogo from '../twitter.svg';
import './Timeline.css';


class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTweet: '',
    };
  }

  handleInputChange(e) {
    this.setState({ newTweet: e.target.value });
  }

  handleNewTweet(e) {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem('@GoTwitter:username');

    console.log(author, content);
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
      </div>
    );
  }
}

export default Timeline;
