import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import chatReducer from './chat-reducer';
import { appReducer } from './app-reducer';

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U }
  ? U
  : never;

export type BaseThunkType<A extends Action, P = Promise<void>> = ThunkAction<
  P,
  AppStateType,
  unknown,
  A
>;

let rootReducer = combineReducers({
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  char: chatReducer,
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// window.store = store // если раскоментировать, то сможем получить доступ к store из консоли браузера с помощью store.getState()

export default store;
