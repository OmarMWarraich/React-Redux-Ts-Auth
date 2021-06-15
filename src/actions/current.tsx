import { type } from "os";
import { ThunkDispatch as Dispatch } from "redux-thunk";

import * as constants from "../constants";
import { ICurrent } from "../types";

export interface IAuthenticate {
    type: constants.AUTHENTICATE;
}

function authenticate(): IAuthenticate {
    return {
        type: constants.AUTHENTICATE,
    };
}

export interface IUnauthenticate {
    type: constants.UNAUTHENTICATE;
}

function unauthenticate(): IUnauthenticate {
    return {
        type: constants.UNAUTHENTICATE,
    }
}

export type AuthenticationAction = IAuthenticate | IUnauthenticate;

export function logIn() {
    return (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
        window.localStorage.setItem("authenticated", "true");
        dispatch(authenticate());
    };
}

export function logOut() {
    return (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
        window.localStorage.setItem("authenticated", "false");
        dispatch(unauthenticate());
    };
}

export function checkAuthentication() {
    return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
        const auth = await window.localStorage.getItem("authenticated");
        const formattedAuth = typeof auth === "string" ?
          JSON.parse(auth) :
          null;
          
        formattedAuth ? dispatch(authenticate()) : dispatch(unauthenticate());
    };
}

