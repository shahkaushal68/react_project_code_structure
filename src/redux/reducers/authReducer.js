import { handleActions } from "redux-actions";
import { authTypes } from "../constants";


const initialState = {
    user:null, 
}

const authReducer = handleActions(
    {
        [authTypes.USER_ADD]: (state = initialState, action) => {
            //console.log("action", action);
            return {
                ...state,
                user: action.payload,
            };
        },
    },
    initialState,
);

export default authReducer