const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
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

let initialState = {
    posts: [
        {id: 1, message: "HI, it's my first post", likesCount: 1},
        {id: 2, message: "I got GN4", likesCount: 210},
        {id: 3, message: "SIIIIIUUUUUU", likesCount: 101},
        {id: 4, message: "Ya Nikita", likesCount: 2},
        {id: 5, message: "I'm Nikita", likesCount: 0}
    ],
    newPostText: 'A YA NIKITA LYALYALYA'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 13
            }
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
    return state;
}

export default profileReducer;