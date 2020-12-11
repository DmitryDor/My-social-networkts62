export type PostType = {
    id: string,
    message: string,
    likesCount: number
}


export type AddPostActionType = {
    type: 'ADD-POST'
}

type  UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: any
}
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: null | string
        large: null | string
    }
}


type ActionType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileActionType

type InitialStateType = typeof initialState

let initialState = {
    postData: [] as Array<PostType> ,
    newPostText: '',
    profile: null as null |  ProfileType
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            return {
                ...state,
                // postData: state.postData.map(el => ({...el}))
                postData: [...state.postData, {id: "5", message: state.newPostText, likesCount: 0}],
                newPostText: ''
            }
            /* const newPost = {id: "5", message: stateCopy.newPostText, likesCount: 0}
             stateCopy.postData = [...stateCopy.postData]
             stateCopy.postData.push(newPost)
             stateCopy.newPostText = ''
             return stateCopy*/
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        default : {
            return state
        }
    }
}

export const AddPostAC = (): AddPostActionType => ({type: "ADD-POST"})

export const UpdateNewPostTextAC = (newText: string): UpdateNewPostTextActionType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText
})
export const setUserProfileAC = (profile: ProfileType): SetUserProfileActionType => ({type: "SET-USER-PROFILE", profile})

