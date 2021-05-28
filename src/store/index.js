import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as HomeReducer } from "../container/Home/stroe";
import thunk from "redux-thunk";
import clientAxios from "../client/network";
import serverAxios from "../server/network";

const reducer = combineReducers({
  home: HomeReducer,
});

export const getStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios))
  );
};

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
};
