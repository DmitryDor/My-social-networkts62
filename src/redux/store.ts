
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export type DialogsType = {
    id: string,
    name: string
}

export type MessagesType = {
    id: string,
    message: string
}

export type PostType = {
    id: string,
    message: string,
    likesCount: number
}

export type DialogsPageType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
    newMessage: string
}

export type ProfilePageType = {
    postData: Array<PostType>
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
type  UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdateMessageText = {
    type: 'UPDATE-MESSAGE-TEXT'
    newMessage: string
}


export type ActionTypePost = AddPostActionType | UpdateNewPostTextActionType
export type ActionTypeMessage = AddMessageActionType | UpdateMessageText

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: any) => void
    getState: () => StateType
    dispatch: (action: ActionTypePost | ActionTypeMessage) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: "1", message: "Hello", likesCount: 10},
                {id: "2", message: "How are you?", likesCount: 5},

            ],
            newPostText: ''
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
                {id: "5", message: "Happy new year"},
            ],
            newMessage: ''
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        //@ts-ignore
        profileReducer(this._state.profilePage, action as ActionTypePost)
        // dialogsReducer(this._state.dialogsPage, action as ActionTypeMessage)
        this._callSubscriber()

    }
}

//@ts-ignore
window.store = store
