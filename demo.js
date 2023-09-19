const redux = require('redux')
const createStore = redux.createStore

const FETCH_API = "FETCH_API"

function fetchAPI() {
    return {
        type: FETCH_API,
        soLuong: 20
    }
}
//  reducer
const initalState = {
    number: 10,
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_API:
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state

    }
}

const store = createStore(reducer)
console.log("king", store.getState());

const demo = store.subscribe(() => console.log('update state', store.getState()))

store.dispatch(fetchAPI())
store.dispatch(fetchAPI())
store.dispatch(fetchAPI())
demo()

