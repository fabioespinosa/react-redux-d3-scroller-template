import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';

var g = null;

class Viz1 extends Component {
	componentDidMount() {
		const { width, height } = this.props;
		// setupVis
		g = d3.select('#viz1');
		g
			.append('text')
			.attr('class', 'title vis-title')
			.attr('x', 10)
			.attr('y', height / 5 + 100)
			.text('¿QUIÉN TUVO MAYOR VISIBILIDAD?');

		g
			.append('text')
			.attr('class', 'sub-title vis-title')
			.attr('x', 10)
			.attr('y', height / 5 + height / 10 + 100)
			.text('Con base en más de 115.000 retweets de candidatos hechos en los últimos 7 días');
	}
	shouldComponentUpdate(props) {
		const { currentVizIndex, currentProgress } = props;
		this.renderViz(currentVizIndex, currentProgress);
		return false;
	}

	renderViz = (currentVizIndex, currentProgress) => {
		if (currentVizIndex === 1) {
			this.showVisualization();
		} else {
			this.hideVisualization();
		}
	};

	showVisualization = () => {
		g
			.selectAll('.vis-title')
			.transition()
			.duration(600)
			.attr('opacity', 1);
	};

	hideVisualization = () => {
		g
			.selectAll('.vis-title')
			.transition()
			.duration(200)
			.attr('opacity', 0);
	};

	render() {
		return <g className="step" id="viz1" />;
	}
}

const mapStateToProps = state => ({
	currentVizIndex: state.home.currentVizIndex,
	currentProgress: state.home.currentProgress,
	height: state.home.size.height,
	width: state.home.size.width
});

export default connect(mapStateToProps, null)(Viz1);
