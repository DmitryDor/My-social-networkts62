import React, {ChangeEvent} from 'react'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input value={this.state.status} onBlur={this.deactivateEditMode} autoFocus onChange={this.onStatusChange}/>
                    </div>
                }
            </div>
        )
    }


}