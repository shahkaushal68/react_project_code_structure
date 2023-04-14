import { createAction } from "redux-actions";

export const authTypes = {
    LOGIN_USER: "LOGIN_USER",
   
    USER_ADD: "USER_ADD"
}


export const LOGIN_USER = createAction(authTypes.LOGIN_USER);

export const USER_ADD = createAction(authTypes.USER_ADD);
