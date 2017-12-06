import axios from 'axios';
const ROOT_URL = 'https://api_twitter.fabioespinosa.com';
const FETCH_DATA = 'FETCH_DATA';

export const fetchData = () => dispatch => {
	axios.get(`${ROOT_URL}/viz_retweets`).then(response => {
		dispatch({ type: FETCH_DATA, payload: response.data });
	});
};

const INITIAL_STATE = {
	datos: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_DATA:
			return { ...state, datos: action.payload };
		default:
			return state;
	}
}
