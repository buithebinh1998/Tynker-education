import {createAction} from 'redux-actions';
import typeToReducer from 'type-to-reducer'

const REGISTER = 'USER/REGISTER';

const LOGIN = 'USER/LOGIN';

const LOGOUT = 'USER/LOGOUT';

const register = createAction(REGISTER);

const login = createAction(LOGIN);

const logout = createAction(LOGOUT)

const initialState = {
    name: '',
    logged: false
}

const reducer = typeToReducer({
    [LOGIN]: (state,action) =>({
        ...state,
        name: action.payload,
        logged: true
    }),
    [REGISTER]: (state,action) =>({
        ...state,
        name: action.payload,
        logged: false
    }),
    [LOGOUT]: (state,action) => ({
        ...state,
        name: '',
        logged: false
    })
})

export {register,login,logout}

export default reducer; 