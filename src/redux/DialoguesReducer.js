const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    dialogues: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Dima"},
        {id: 4, name: "Dima"}
    ],
    messages: [
        {id: 1, message: "HI"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Fine"},
        {id: 4, message: "Idi naxyu"},
        {id: 5, message: "Sam idi"}
    ],
    newMessageBody: ''
}

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody;
            return state;
        default:
            return state;
    }
    return state;
}
export const addMessageActionCreator = () => (
    {
        type: ADD_MESSAGE
    }
)
export const updateNewMessageTextActionCreator = (body) => (
    {
        type: UPDATE_NEW_MESSAGE_BODY, newBody: body
    }
)
export default dialoguesReducer;