import React from 'react';
import ReactDom from 'react-dom';
import {hot} from 'react-hot-loader/root';

import Context from './Context';

const Hot = hot(Context);

ReactDom.render(<Hot />, document.querySelector('#app'));