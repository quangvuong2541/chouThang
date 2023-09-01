import API from "../../../API/API";
import * as ActionType from "../constant/constant"

export const createAction = ({ type, payload }) => {
    return {
        type,
        payload
    }
}


export const actGetProductAPI = () => {
    return async (dispatch) => {
        try {
            dispatch(createAction({ type: ActionType.ISLOADING, payload: true }))
            const res = await API(`GET`, "Foods")
            dispatch(
                createAction({
                    type: ActionType.CALLAPI,
                    payload: res.data
                })
            );
            dispatch(createAction({ type: ActionType.ISLOADING, payload: false }))

        } catch (error) {
            console.log({ ...error });
        }
    }
}


