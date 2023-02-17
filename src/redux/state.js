import {rerenderEntireTree} from "../render";

let state = {
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
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 13
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;