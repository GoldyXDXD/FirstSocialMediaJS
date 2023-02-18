import s from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import React from "react";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/state";
const Dialogues = (props) => {


    let newMessageBody = props.state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        let action = updateNewMessageTextActionCreator(body);
        props.store.dispatch(action);

    }

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let dialoguesElements = props.state.dialogues
        .map(d => <DialogueItem name={d.name} id={d.id} />)

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea placeholder="Enter your message" onChange={onNewMessageChange} value={newMessageBody}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogues;