let rerenderEntireTree = (state: StateType) => {

}

export type DialogsType = {
    id: string,
    name: string
}

export type MessagesType = {
    id: string,
    message: string
}

export type PropsType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
}

export type PostType = {
    id: string,
    message: string,
    likesCount: number
}

/*let dialogsData: Array<DialogsType> = [
    {id: "1", name: "Dimych"},
    {id: "2", name: "Andrey"},
    {id: "3", name: "Sveta"},
    {id: "4", name: "Sasha"},
    {id: "5", name: "Victor"},
    {id: "6", name: "Valera"}
];

let messagesData: Array<MessagesType>  = [
    {id: "1", message: "Hi"},
    {id: "2", message: "How are you?"},
    {id: "3", message: "I'm fine"},
    {id: "4", message: "I'm happy"},
    {id: "5", message: "Happy new year"}
];

let postData: Array<PostType> = [
    {id: "1", message: "Dimych", likesCount: 10},
    {id: "2", message: "Andrey", likesCount: 5 },
    {id: "3", message: "Sveta", likesCount:  7 },
    {id: "4", message: "Sasha", likesCount:  8},
    {id: "5", message: "Victor", likesCount: 5},
    {id: "6", message: "Valera", likesCount: 18}
];*/

export type DialogsPageType = {
    dialogsData: Array<DialogsType>,
    messagesData: Array<MessagesType>,
    newMessageText: string
}

export type ProfilePageType = {
    postData: Array<PostType>,
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}
/*

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: "1", message: "Hello", likesCount: 10},
                {id: "2", message: "Goodbyu", likesCount: 5},
                {id: "3", message: "I'm fine", likesCount: 7},
                {id: "4", message: "Good day!", likesCount: 8},
                {id: "5", message: "Year", likesCount: 5},
                {id: "6", message: "Welcome", likesCount: 18}
            ],
            newPostText: "It-camasutra"
        },
        dialogsPage: {
            dialogsData: [
                {id: "1", name: "Dimych"},
                {id: "2", name: "Andrey"},
                {id: "3", name: "Sveta"},
                {id: "4", name: "Sasha"},
                {id: "5", name: "Victor"},
                {id: "6", name: "Valera"}
            ],
            messagesData: [
                {id: "1", message: "Hi"},
                {id: "2", message: "How are you?"},
                {id: "3", message: "I'm fine"},
                {id: "4", message: "I'm happy"},
                {id: "5", message: "Happy new year"}
            ],
            newMessageText: "Dimon"
        }

    },
    rerenderEntireTree  (state: StateType)  {
        console.log("State changed")
    },
     addPost  ()  {
        let newPostData = {
            id: "5",
            message: state.profilePage.newPostText,
            likesCount: 0
        };
        state.profilePage.postData.push(newPostData);
        state.profilePage.newPostText="";
        rerenderEntireTree(state);
    },
    updateNewPostText  (newText: string)  {
        state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
    },
    export const addMessage = () => {
        let messageData = {
            id: "6",
            message: state.dialogsPage.newMessageText
        }
        state.dialogsPage.messagesData.push(messageData);
        state.dialogsPage.newMessageText="";
        rerenderEntireTree(state);
    }

}
*/

export let state: StateType = {
    profilePage: {
        postData: [
            {id: "1", message: "Hello", likesCount: 10},
            {id: "2", message: "Goodbyu", likesCount: 5},
            {id: "3", message: "I'm fine", likesCount: 7},
            {id: "4", message: "Good day!", likesCount: 8},
            {id: "5", message: "Year", likesCount: 5},
            {id: "6", message: "Welcome", likesCount: 18}
        ],
        newPostText: "It-camasutra"
    },
    dialogsPage: {
        dialogsData: [
            {id: "1", name: "Dimych"},
            {id: "2", name: "Andrey"},
            {id: "3", name: "Sveta"},
            {id: "4", name: "Sasha"},
            {id: "5", name: "Victor"},
            {id: "6", name: "Valera"}
        ],
        messagesData: [
            {id: "1", message: "Hi"},
            {id: "2", message: "How are you?"},
            {id: "3", message: "I'm fine"},
            {id: "4", message: "I'm happy"},
            {id: "5", message: "Happy new year"}
        ],
        newMessageText: "Dimon"
    }

}


export const addPost = () => {
    let newPostData = {
        id: "5",
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPostData);
    state.profilePage.newPostText="";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let messageData = {
        id: "6",
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messagesData.push(messageData);
    state.dialogsPage.newMessageText="";
    rerenderEntireTree(state);
}

export const updateNewMessgeText = (newText: string) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}


export const subscribe = (observer: any) => {
    rerenderEntireTree= observer;
}