import profileReducer from "./ProfileReducer";
import dialoguesReducer from "./DialoguesReducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguePage = dialoguesReducer(this._state.dialoguePage, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;

