type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdateMessageText = {
    type: 'UPDATE-MESSAGE-TEXT'
    newMessage: string
}
type ActionType = AddMessageActionType | UpdateMessageText

export type DialogsType = {
    id: string,
    name: string
}
export type MessagesType = {
    id: string,
    message: string
}

type InitialStateType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
    newMessage: string
}

let initialState: InitialStateType = {
    dialogsData: [
        {id: "1", name: "Dimych"},
        {id: "2", name: "Andrey"},
        {id: "3", name: "Sveta"},
        {id: "4", name: "Sasha"},
        {id: "5", name: "Victor"},
        {id: "6", name: "Valera"}
    ],
    messagesData: [ ],
    newMessage: ''
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            return {
                ...state,
                newMessage: '',
                // messagesData: state.messagesData.map(el => ({...el})),
                messagesData: [...state.messagesData, {id: "6", message: state.newMessage}]
            }
            // let body = state.newMessage
          /*  const stateCopy = {
                ...state,
                newMessage: '',
                // messagesData: state.messagesData.map(el => ({...el})),
                messagesData: [...state.messagesData, {id: "6", message: state.newMessage}]
            }*/
            // const newMessage = {id: "6", message: stateCopy.newMessage}
            // stateCopy.messagesData = stateCopy.messagesData
            // stateCopy.messagesData.push(newMessage)
            // stateCopy.newMessage = ''
            // return stateCopy
        }
        case "UPDATE-MESSAGE-TEXT": {
            return {
                ...state,
                newMessage: action.newMessage
            }
           /* const stateCopy = {...state}
            stateCopy.newMessage = action.newMessage
            return stateCopy*/
        }
        default: {
            return state
        }
    }
}
export const addMessageAC = (): AddMessageActionType => ({type: 'ADD-MESSAGE'})

export const updateMessageAC = (newMessage: string): UpdateMessageText => ({
    type: 'UPDATE-MESSAGE-TEXT',
    newMessage: newMessage
})