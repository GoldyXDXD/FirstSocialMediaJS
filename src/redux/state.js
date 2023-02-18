const ADD_POST = 'ADD_POST';
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "HI, it's my first post", likesCount: 1},
                {id: 2, message: "I got GN4", likesCount: 210},
                {id: 3, message: "SIIIIIUUUUUU", likesCount: 101},
                {id: 4, message: "Ya Nikita", likesCount: 2},
                {id: 5, message: "I'm Nikita", likesCount: 0}
            ],
            newPostText: 'A YA NIKITA LYALYALYA'
        },

        dialoguePage: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            // debugger;
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 13
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === ADD_MESSAGE) {
            let newBody = {
                id: 6,
                message: this._state.dialoguePage.newMessageText
            }
            this._state.dialoguePage.messages.push(newBody);
            this._state.dialoguePage.newMessageBody = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialoguePage.newMessageText = action.newBody;
            this._callSubscriber(this._state)
        }
    }
}
export const addPostActionCreator = () => (
    {
        type: ADD_POST
    }
)
export const updateNewPostTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
)
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
export default store;
window.store = store;

