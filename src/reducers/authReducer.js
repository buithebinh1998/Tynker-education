import { C } from '../constants/index'
import * as actionTypes from '../actions/actionType'
import { updateObject } from './utility'

const initialState = {
  token: C.EMPTY_STRING,
  userId: C.EMPTY_STRING,
  isSignup: true,
  error: C.EMPTY_STRING,
  loading: false,
  authRedirectPath: C.AUTH_REDIRECT
}

const authStart = (state, action) => {
  return updateObject(state, { error: C.EMPTY_STRING, loading: true })
}

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: C.EMPTY_STRING,
    loading: false
  })
}
const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  })
}

const authLogout = (state, action) => {
  return updateObject(state, { token: C.EMPTY_STRING, userId: C.EMPTY_STRING })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action)
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action)
    case actionTypes.AUTH_FAIL:
      return authFail(state, action)
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action)
    default:
      return state
  }
}

export default reducer
