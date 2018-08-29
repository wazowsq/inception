import React from 'react';
import ReactDOM from 'react-dom';
import Master from './master';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Master />, document.getElementById('root'));
registerServiceWorker();