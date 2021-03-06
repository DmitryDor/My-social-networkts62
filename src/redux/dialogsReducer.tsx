

export type InitialStateType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
    // newMessage: string
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
    // newMessage: ''
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "DIALOGS/ADD-MESSAGE": {
            return {
                ...state,
                // newMessage: '',
                // messagesData: state.messagesData.map(el => ({...el})),
                messagesData: [...state.messagesData, {id: "6", message: action.newMessageBody}]
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
     /*   case "UPDATE-MESSAGE-TEXT": {
            return {
                ...state,
                // newMessage: action.newMessage
            }

        }*/
        default: {
            return state
        }
    }
}

//AC

export const addMessageAC = (newMessageBody: string) => ({type: 'DIALOGS/ADD-MESSAGE', newMessageBody})

// types

type ActionType = ReturnType<typeof addMessageAC>

export type DialogsType = {
    id: string,
    name: string
}
export type MessagesType = {
    id: string,
    message: string
}
