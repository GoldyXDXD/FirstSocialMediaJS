import React from "react";

import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/DialoguesReducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialoguePage: state.dialoguePage
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {
            let action = updateNewMessageTextActionCreator(body);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    };
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);
export default DialoguesContainer;