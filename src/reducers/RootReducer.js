import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AuthReducer from './authReducer';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
const persistConfig = {
   key: 'root',
   storage,
   stateReconciler: hardSet,
 }

const rootReducer = combineReducers({
   auth:  AuthReducer,
})

export default persistReducer(persistConfig,rootReducer);