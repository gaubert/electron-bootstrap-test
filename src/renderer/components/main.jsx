'use strict';

import React from 'react';
import shell from 'shell';

export class Main extends React.Component {
  state = {
    message: 'Hello, Mme Electron'
  }
  constructor () {
    super();
    this.openGithub = ::this.openGithub
  }
  openGithub () {
    shell.openExternal('https://github.com/Quramy/electron-jsx-babel-boilerplate');
  }
  render() {
    return (
    <div className="container">
      <div className="label label-default">{this.state.message}</div>
      <div className="jumbotron main">
        <h1>{this.state.message}</h1>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        <img src="../assets/images/electron.svg" alt="" width="128px"></img>
        <p>Provided by <a href="#" onClick={this.openGithub}>electron-jsx-babel-boilerplate<span className="glyphicon glyphicon-heart"></span></a></p>
      </div>
    </div>
    );
  }
}
