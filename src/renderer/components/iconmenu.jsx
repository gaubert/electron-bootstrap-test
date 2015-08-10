'use strict';

import React from 'react';

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
             <img src="../assets/images/downloading.svg" alt="" >{this.state.message}</img>
          </div>
          <div className="row">
             <img src="../assets/images/uploading2.svg" alt="" ></img>
          </div>
      </div>
    );
  }
}
