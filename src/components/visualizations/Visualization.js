import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../../ducks/data';
import Viz1 from './viz1';
import Viz2 from './viz2';
import Viz3 from './viz3';
import Viz4 from './viz4';
import Viz5 from './viz5';
import Viz6 from './viz6';
import Viz7 from './viz7';
import Viz8 from './viz8';
import Viz9 from './viz9';
import Viz10 from './viz10';

class Visualization extends Component {
	componentWillMount() {
		this.props.fetchData();
	}

	render() {
		var style = {
			position: 'fixed',
			top: 0,
			left: 0,
			width: '800',
			height: '800'
		};
		const { width, height, margin_top, margin_right, margin_bottom, margin_left } = this.props;
		return (
			<div>
				<svg className="Visualization" style={style}>
					<Viz1 />
					{this.props.datos && <Viz2 />}
					<Viz2 />
					<Viz3 />
					<Viz4 />
					<Viz5 />
					<Viz6 />
					<Viz7 />
					<Viz8 />
					<Viz9 />
					<Viz10 />
				</svg>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	width: state.home.size.width,
	height: state.home.size.height,
	margin_top: state.home.size.margin.top,
	margin_right: state.home.size.margin.right,
	margin_bottom: state.home.size.margin.bottom,
	margin_left: state.home.size.margin.left,

	datos: state.datos
});

export default connect(mapStateToProps, { fetchData })(Visualization);
