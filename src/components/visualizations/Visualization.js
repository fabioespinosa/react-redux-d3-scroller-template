import React, { Component } from 'react';
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
	render() {
		const altura = {
			height: '800px'
		};
		return (
			<div>
				<svg>
					<Viz1 />
				</svg>
				<div style={altura}>espacio</div>
				<svg>
					<Viz2 />
				</svg>
				<div style={altura}>Espacio</div>
				<svg>
					<Viz3 />
				</svg>
				<div style={altura}>Espacio</div>
				<svg>
					<Viz4 />
				</svg>
				<div style={altura}>Espacio</div>
				<svg>
					<Viz5 />
				</svg>
				<div style={altura}>Espacio</div>
				<svg>
					<Viz6 />
				</svg>
				<div style={altura}>Espacio</div>
				<svg>
					<Viz7 />
				</svg>
				<div style={altura}>Espacio</div>
				<svg>
					<Viz8 />
				</svg>
				<div style={altura}>Espacio</div>
				<svg>
					<Viz9 />
				</svg>
				<div style={altura}>Espacio</div>
				<svg>
					<Viz10 />
				</svg>
			</div>
		);
	}
}

export default Visualization;
