function createStore(reducer, initialState) {
	let state = initialState
	let subscribers = {}

	function getState() {
		return state
	}

	function subscribe(cb) {
		subscribers.push(cb)
	}

	function dispatch(action) {
		state = reducer(state, action)
		subscribers.forEach(sub => {
			sub()
		})
	}
	return { getState, subscribe, dispatch }
}

let reducer = require('./reducer')
let store = createStore(reducer, 0)


store.dispatch({ type: 'INCREMENT_COUNT'})

store.subscribe(() => {
	console.log(`Current state: ${store.getState()`)
})