import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";
// import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootReducer from "./rootReducers";
// import rootSaga from "./rootSaga";

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];
const middlewares = [thunk];
const logger = createLogger({ collapsed: true });
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const composeEnhancer = composeWithDevTools({
  // ...options
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

// sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
