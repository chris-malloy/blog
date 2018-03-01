import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rp from 'redux-promise';
import { BrowserRouter as BR, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import PostsIndex from './containers/PostsIndex';
import PostsNew from './containers/PostNew';
import PostsShow from './containers/PostsShow';

const store = applyMiddleware(rp)(createStore)(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<div className="container">
			<BR>
				<div>
					<Switch>
						<Route path="/posts/new" component={PostsNew} />
						<Route path="/posts/:id" component={PostsShow} /> 
						<Route path="/" component={PostsIndex} />
					</Switch>
				</div>
			</BR>
		</div>
	</Provider>
, document.getElementById('root'));
registerServiceWorker();
