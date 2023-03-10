import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialoguesReducer from "./DialoguesReducer";
import usersReducer from "./UsersReducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialoguePage: dialoguesReducer,
        usersPage: usersReducer
    })

let store = createStore(reducers);

window.store = store;

export default store;