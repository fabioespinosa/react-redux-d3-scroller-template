import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';

var g = null;

class Viz2 extends Component {
	componentDidMount() {
		g = d3.select('#viz2');
	}

	shouldComponentUpdate(props) {
		const { currentVizIndex, currentProgress } = props;
		this.renderViz(currentVizIndex, currentProgress, props);
		return false;
	}

	renderViz = (currentVizIndex, currentProgress, props) => {
		if (currentVizIndex === 2 && props.retweets) {
			this.showVisualization(props);
		} else {
			this.hideVisualization();
		}
	};

	showVisualization = props => {
		const { width, height, retweets, margin_top, margin_bottom, margin_left } = props;
		var colors = d3.scaleOrdinal(d3.schemeCategory20);

		var xScale = d3
			.scaleBand()
			//.domain(xDomain)
			.range([30, width]);

		var yScale = d3
			.scaleLinear()
			//.domain([0, yMax])
			.range([height - margin_top, margin_bottom]);

		console.log(height, width, margin_top, margin_bottom, margin_left);
		// setupVis
		var yMax = d3.max(retweets, d => d.cuenta_retweets);
		yScale.domain([0, yMax]);

		var xDomain = retweets.map(d => d.twitter_handle);
		xScale.domain(xDomain);

		var yAxis = d3.axisLeft().scale(yScale);

		console.log(margin_left, margin_top);
		g
			.append('g')
			.attr('id', 'eje_y')
			.attr('transform', `translate(${margin_left},${margin_top})`)
			.call(yAxis)
			.attr('opacity', 1);

		let bars = g
			.append('g')
			.classed('bars', true)
			.selectAll('rect')
			.data(retweets, d => d.twitter_handle);

		let barsE = bars
			.enter()
			.append('rect')
			.classed('bar', true);
		//
		bars = bars
			.merge(barsE)
			.attr('x', d => xScale(d.twitter_handle))
			.attr('fill', d => colors(d.twitter_handle))
			.attr('y', d => {
				return margin_top + yScale(d.cuenta_retweets);
			})
			.attr('height', (d, i) => {
				return height - yScale(d.cuenta_retweets) - margin_top;
			})
			.attr('width', 10)
			.attr('opacity', 0)
			.transition()
			.duration(600)
			.attr('opacity', 1);

		let images = g
			.append('g')
			.classed('images', true)
			.selectAll('image')
			.data(retweets, d => d.twitter_handle);

		let imagesE = images
			.enter()
			.append('svg:image')
			.attr('class', d => `${d.twitter_handle}_exit`)
			.classed('image', true);

		// Tip
		// var tip = d3
		// 	.tip()
		// 	.attr('class', 'd3-tip arriba')
		// 	.offset([-10, 0])
		// 	.html(d => `<strong>${d.name} - ${d.twitter_handle} - ${d.cuenta_retweets} retweets</strong>`);
		// g.call(tip);

		images = images
			.merge(imagesE)
			.attr('xlink:href', d => d.photo_url)
			.attr('x', d => xScale(d.twitter_handle) - 15)
			.attr('y', d => {
				return margin_top + yScale(d.cuenta_retweets) - 40;
			})
			.attr('width', 40)
			.attr('height', 40)
			.attr('opacity', 0)
			.transition()
			.duration(600)
			.attr('opacity', 1);
		// .on('mouseover', tip.show)
		// .on('mouseout', tip.hide);
		//
		let circles = g
			.append('g')
			.classed('circles', true)
			.selectAll('circle')
			.data(retweets, d => d.twitter_handle);
		//
		let circlesE = circles
			.enter()
			.append('circle')
			.attr('class', d => `${d.twitter_handle}_exit`)
			.classed('circle', true);

		circles = circles
			.merge(circlesE)
			.attr('cx', d => xScale(d.twitter_handle) + 5)
			.attr('cy', d => {
				return margin_top + yScale(d.cuenta_retweets) - 20;
			})
			.attr('r', 18)
			.attr('fill', 'transparent')
			.attr('stroke', d => colors(d.twitter_handle))
			.attr('stroke-width', 3.4)
			.attr('opacity', 0)
			.transition()
			.duration(600)
			.attr('opacity', 1);
		// .on('mouseover', tip.show)
		// .on('mouseout', tip.hide);

		g
			.append('text')
			.attr('id', 'retweets_label')
			.attr('transform', 'rotate(-90)')
			.attr('y', 0 - margin_left)
			.attr('x', 0 - height / 2)
			.attr('dy', '1em')
			.style('text-anchor', 'middle')
			.text('# de Retweets')
			.attr('opacity', 0);
	};

	hideVisualization = () => {
		g
			.selectAll('.bar, .image, .circle, #eje_y, #eje_x, #retweets_label')
			.transition()
			.duration(0)
			.attr('opacity', 0);
	};

	render() {
		return <g className="step" id="viz2" />;
	}
}

const mapStateToProps = state => ({
	currentVizIndex: state.home.currentVizIndex,
	currentProgress: state.home.currentProgress,
	height: state.home.size.height,
	width: state.home.size.width,
	margin_top: state.home.size.margin.top,
	margin_right: state.home.size.margin.right,
	margin_bottom: state.home.size.margin.bottom,
	margin_left: state.home.size.margin.left,
	retweets: state.data.datos
});

export default connect(mapStateToProps, null)(Viz2);
