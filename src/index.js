import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from "./components/robots";

ReactDOM.render(
  <App robots={robots} />, document.getElementById("root"));
registerServiceWorker();