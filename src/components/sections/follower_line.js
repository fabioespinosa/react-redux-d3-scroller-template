import React, { Component } from 'react';

class FollowerLine extends Component {
	render() {
		var style = {
			minHeight: '200px',
			position: 'relative',
			pointerEvents: 'none'
		};
		return (
			<div className="Section" id="title" style={style}>
				<strong>Este seria el titulo de la izquierda</strong>
				Este seria el texto mas abajo
			</div>
		);
	}
}

export default FollowerLine;
