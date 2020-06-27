import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk"
import rootReducer from "./reducers/rootReducer";


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  )
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers/rootReducer', () => store.replaceReducer(rootReducer))
}

export default store;
