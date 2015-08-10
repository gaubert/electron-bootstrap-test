'use strict';

import React from 'react';
import shell from 'shell';

export class IconMenu extends React.Component {
  state = {
    message: 'In IconMenu'
  }
  constructor () {
    super();
  }
  render() {
    return (
      <div className="row">
          <div className="row">
            <button type="button" class="btn btn-default btn-lg btn-block">
               <span><img src="../assets/images/downloading.svg" alt="" width="16px"></img></span>
            </button>
            <button type="button" class="btn btn-default btn-lg btn-block">
               <span><img src="../assets/images/uploading2.svg" alt="" width="16px"></img></span>
            </button>
          </div>
      </div>
    );
  }
}

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
      <div className="one column"><IconMenu /></div>
      <div className="eleven columns"></div>
    </div>
    );
  }
}
