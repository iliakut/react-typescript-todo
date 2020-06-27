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
  /*
  * заменяет исходный reducer на reducer который поддерживает hot
  * позволяет изменять код редюсера и не перезагружать страницу (не терять данные)
  */
  module.hot.accept('./reducers/reducer', () => store.replaceReducer(rootReducer))
}

export default store;
