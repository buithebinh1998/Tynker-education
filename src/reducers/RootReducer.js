import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import AuthReducer from './authReducer'
import pageReducer from './pageReducer'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
}

const rootReducer = combineReducers({
  auth: AuthReducer,
  pages: pageReducer
})

export default persistReducer(persistConfig, rootReducer)
