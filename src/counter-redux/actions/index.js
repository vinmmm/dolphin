import { INCREMENT_COUNT } from '../constants/actionTypes.js'

function incrementCount() {
	return {
		type: INCREMENT_COUNT
	}
}

export { incrementCount }