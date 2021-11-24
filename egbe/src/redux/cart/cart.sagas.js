import { all, put, call, takeLatest } from "@redux-saga/core/effects";

import { clearCart } from "./cart.actions";
import UserActionTypes from "../user/user.types";



export function* clearCartonSignOut() {
    yield put(clearCart())
}

export function* onClearCart () {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartonSignOut)
}


export function* cartSagas () {
    yield all([
        call(onClearCart)
    ])
}