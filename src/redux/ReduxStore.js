import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialoguesReducer from "./DialoguesReducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialoguePage: dialoguesReducer
    })

let store = createStore(reducers);

export default store;