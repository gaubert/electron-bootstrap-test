'use strict';

import polyfill from 'babel/polyfill';
import React from 'react';
import {IconMenu} from './components/iconmenu';
import {Main} from './components/main';

React.render(React.createElement(Main), document.getElementById('app'));
