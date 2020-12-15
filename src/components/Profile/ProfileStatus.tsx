import React from 'react'

type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        // console.log(this.state.editMode)
        this.setState({
            editMode: true
        })
        // console.log(this.state.editMode)
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
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
                        <input value={this.props.status} onBlur={this.deactivateEditMode} autoFocus/>
                    </div>
                }
            </div>
        )
    }


}