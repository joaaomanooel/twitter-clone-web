import React, { Component } from 'react';
import twiterLogo from '../twitter.svg';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={twiterLogo} alt="Twitter" />
        <form>
          <input placeholder="Nome de Usuário" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
