import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Visualization from './visualizations/Visualization';
import * as d3 from 'd3';

import { changeVisualization, updateProgress } from '../ducks/home';
import './App.css';

import Title from './sections/title';
import RetweetsBarGraph from './sections/retweets_bar_graph';
import FollowerLine from './sections/follower_line';

var sections = [];
// Posiciones en relación a la primera sección
var sectionPositions = [];
var data = {};

class App extends Component {
	state = {
		scrollDuration: 200,
		section: {}
	};

	componentDidMount() {
		this.updateSectionPositions();
		window.addEventListener(
			'scroll',
			_.throttle(this.onScroll.bind(this), this.state.scrollDuration / 2)
		);
	}

	updateSectionPositions() {
		var startPos;
		var sections = document.querySelectorAll('.Section');
		sections.forEach((d, i) => {
			var top = d.getBoundingClientRect().top;
			if (i === 0) {
				startPos = top;
			}
			sectionPositions.push(top - startPos);
		});
		console.log(sectionPositions);
	}

	onScroll() {
		// Extract methods:
		const { currentVizIndex, changeVisualization, updateProgress } = this.props;

		var scrollTop = window.scrollY || document.documentElement.scrollTop || window.pageYOffset || 0;

		var sectionIndex = d3.bisect(sectionPositions, scrollTop);
		// sectionIndex = Math.min(sections.size() - 1, sectionIndex);
		if (currentVizIndex !== sectionIndex) {
			changeVisualization(sectionIndex);
		}

		var prevIndex = Math.max(sectionIndex - 1, 0);
		var prevTop = sectionPositions[prevIndex];
		var progress = (scrollTop - prevTop) / (sectionPositions[sectionIndex] - prevTop);
		updateProgress(progress);
	}

	render() {
		return (
			<div className="App">
				<h1>Bienvenidos a las visualizaciones de sus candidatos</h1>
				<Visualization {...this.props} />
				{/* SECTIONS: */}
				<Title />
				<RetweetsBarGraph />
				<FollowerLine />
				<FollowerLine />
				<FollowerLine />
				<FollowerLine />
				<FollowerLine />
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { currentVizIndex } = state.home;
	return {
		currentVizIndex
	};
};

export default connect(mapStateToProps, { changeVisualization, updateProgress })(App);
