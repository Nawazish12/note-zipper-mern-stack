import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  noteListReducer,
  noteCreateReducer,
  noteUpdateReducer,
  noteDeleteReducer,
} from "./reducers/notesReducer";

const rootReducer = combineReducers({
  // this will contain all the reducers
  userLoginReducer: userLoginReducer,
  userRegisterReducer: userRegisterReducer,
  noteListReducer: noteListReducer,
  noteCreateReducer: noteCreateReducer,
  noteUpdateReducer: noteUpdateReducer,
  noteDeleteReducer: noteDeleteReducer,
  userUpdateReducer: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLoginReducer: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
