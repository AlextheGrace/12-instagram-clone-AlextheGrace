import React from 'react';
import 'semantic-ui-react';
import {  render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { Root } from './containers';
import registerServiceWorker from './registerServiceWorker';


render(<Root />,
         document.getElementById('root'));
registerServiceWorker();
