import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import AuthReducer from './authReducer'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
}

const rootReducer = combineReducers({
  auth: AuthReducer
})

export default persistReducer(persistConfig, rootReducer)
