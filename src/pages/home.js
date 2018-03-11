import React, {Component} from 'react'
import { Route, Router, Switch ,Redirect } from 'react-router-dom';
import '../style/base.css'
import Content from '../components/content.js'
import English_music from '../components/music/english_music.js'
import Chinese_music from '../components/music/chinese_music.js'
class Home extends Component {
	constructor (props, context) {
		super(props) 
		this.state = {

		}
	}

	componentWillMount () {

	}

	componentDidMount () {

	}

	render () {
		const {location, children} = this.props 
		return (
			<div>
				<header className='home_header'>{ location.pathname }</header>
				<aside className='home_aside' location={location}>aside</aside>
				<section className='home_secion'>
					{ children } 
				</section>
			</div>
			) 
	}

}
export default Home