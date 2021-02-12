import React, {ChangeEvent, useState} from 'react'
import {useDispatch} from "react-redux";
import {updateStatusTC} from "../../redux/profileReducer";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}


export const ProfileStatusWithHooks = (props: PropsType) => {
    const dispatsh = useDispatch()

    let [status, setStatus] = useState<string>(props.status)

    let [editMode, setEditMode] = useState<boolean>(false)


    const activateEditMode = () => {
        setEditMode(true)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setStatus(newValue)
        dispatsh(updateStatusTC(newValue))
        // props.updateStatus(status)  // проверить, в таком случае последняя буква пропадает
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input value={status} onBlur={deactivateEditMode} autoFocus onChange={onStatusChange}/>
                </div>
            }
        </div>
    )
}

