import * as ActionType from "../constant/constant"

let initialState = {
  
    data: [],
    isLoading: false,

}
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.CALLAPI:
            state.data = payload
            break;
        case ActionType.ISLOADING:
            state.isLoading = payload
            break;
   
        default:
            break;
    }
    return { ...state }
}
export default reducer