const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const FETCH_API = "FETCH_API"
const REST = "REST"
const FETCH_API_1 = "FETCH_API_1"
const REST_1 = "REST_1"

function fetchAPI() {
    return {
        type: FETCH_API,
        soLuong: 20
    }
}

function restockToys(sl = 5) {
    return {
        type: REST,
        soLuong: sl

    }
}

function fetchAPI_1(qty = 1) {
    return {
        type: FETCH_API_1,
        payload: qty
    }
}


function restockToys_1(qty = 1) {
    return {
        type: REST_1,
        payload: qty
    }
}
//  reducer
const initalState = {
    number: 10,
    number1: 20
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_API:
            return {
                ...state,
                number: state.number - 1
            }
        case REST:
            return {
                ...state,
                number: state.number + action.soLuong
            }
        case FETCH_API_1:
            return {
                ...state,
                number1: state.number1 - 1
            }
        case REST_1:
            return {
                ...state,
                number1: state.number1 + action.payload
            }
        default:
            return state

    }
}

const store = createStore(reducer)
console.log("king", store.getState());

const demo = store.subscribe(() => console.log('update state', store.getState()))

// store.dispatch(fetchAPI())
// store.dispatch(fetchAPI())
// store.dispatch(fetchAPI())
// store.dispatch(restockToys(3))


const actions = bindActionCreators({ fetchAPI, restockToys, fetchAPI_1, restockToys_1 }, store.dispatch)
actions.fetchAPI()
actions.fetchAPI()
actions.fetchAPI()
actions.restockToys(3)
actions.fetchAPI_1()
actions.restockToys_1(2)
demo()

