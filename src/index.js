import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as BR, Route } from 'react-router-dom';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import PostsIndex from './components/PostsIndex';

const store = applyMiddleware()(createStore)(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <div className="">
            <BR>
                <div>
                    <Route path="/" component={PostsIndex} />
                </div>
            </BR>
        </div>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
