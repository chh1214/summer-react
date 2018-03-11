import registerServiceWorker from './registerServiceWorker';
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import  App  from './app.js'
import rootReducer from './reducers/index.js'

const history = createHistory()
const middleware = routerMiddleware(history)
const middlewares = [thunk, middleware]
const store = createStore(
	combineReducers({routing: routerReducer, ...rootReducer}),
	composeWithDevTools(applyMiddleware(...middlewares))
)

const render = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<Component />
		</Provider>,
			document.getElementById('root')
	)
}
render(App)
registerServiceWorker();
