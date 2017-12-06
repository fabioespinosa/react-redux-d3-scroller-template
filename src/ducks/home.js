const CHANGE_VISUALIZATION = 'CHANGE_VISUALIZATION';
const UPDATE_PROGRESS = 'UPDATE_PROGRESS';

export const changeVisualization = newIndex => ({
	type: CHANGE_VISUALIZATION,
	payload: newIndex
});

export const updateProgress = newProgress => ({
	type: UPDATE_PROGRESS,
	payload: newProgress
});

const INITIAL_STATE = {
	currentVizIndex: 0,
	currentProgress: 0,
	size: {
		width: 800,
		height: 600,
		margin: {
			top: 30,
			left: 30,
			bottom: 40,
			right: 10
		}
	}
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case CHANGE_VISUALIZATION:
			return { ...state, currentVizIndex: action.payload };
		case UPDATE_PROGRESS:
			return { ...state, currentProgress: action.payload };
		default:
			return state;
	}
}
