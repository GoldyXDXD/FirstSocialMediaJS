import React from "react";

import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/DialoguesReducer";
import Dialogues from "./Dialogues";
const DialoguesContainer = (props) => {

    let state = props.store.getState().dialoguePage;

    let onNewMessageChange = (body) => {
        let action = updateNewMessageTextActionCreator(body);
        props.store.dispatch(action);

    }

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }


    return <Dialogues updateNewMessageBody={onNewMessageChange} sendMessage={addMessage} dialoguePage={state}/>
}

export default DialoguesContainer;