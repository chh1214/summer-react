import React, {Component} from 'react'
import { Route, Router, Switch ,Redirect, Link } from 'react-router-dom';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import createHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import Home from './pages/home.js'
import Login from './pages/login.js'
import Content from './components/content.js'
import English_music from './components/music/english_music.js'
import Chinese_music from './components/music/chinese_music.js'
import './style/base.css'

import  { currentAnimate } from './actions/global.js'

const history = createHistory()

const isLogined = true

connect(
	state => ({...state.global }),
	dispatch => (bindActionCreators(currentAnimate, dispatch))
)
class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			num: 2
		}
	}
	componentWillMount () {
		const store = this.context.store
		store.dispatch(currentAnimate('in'))
	}

	componentDidMount () {
		window.addEventListener('hashchange', () => {}, false)
		console.log(this.context.store.getState())
		console.log(this.props.animateCls)
	}
	 
	render () {
		return (
			<Router history={ history }>
				{ isLogined ?
					( 	
						<div>
							<header className='home_header'>header {this.props.animateCls}</header>
							<aside className='home_aside'>
								<div><Link to='/'>content</Link></div>
								<div><Link to='/english'>english</Link></div>
							</aside>
							<section className='home_secion'>
								<Route exact path='/' component={ Content } />
								<Route  path='/english' component={ English_music } />
							</section>
						</div>
					):
					(<Switch>
						<Route path='/login'  component={ Login }/>
						<Route path='/' render={() =>
							(<Redirect to='/login' />) }/>
					</Switch>)
				  }
			</Router>
			)
	}
}
App.contextTypes ={
	store: PropTypes.object.isRequired
}
export default App

