/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import twiterLogo from '../twitter.svg';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  handleSubmit(e) {
    const { username } = this.state;

    e.preventDefault();
    if (!username) return;

    localStorage.setItem('@GoTwitter:username', username);
    this.props.history.push('/timeline');
  }

  handleInputChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={twiterLogo} alt="Twitter" />
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Nome de Usuário"
            onChange={e => this.handleInputChange(e)}
          />
          <button type="submit">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
