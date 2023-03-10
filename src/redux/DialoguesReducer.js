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
        {id: 4, message: "Siiiuuuuuu"},
        {id: 5, message: "Idu domoi"}
    ],
    newMessageBody: ''
}

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newBody
            };
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