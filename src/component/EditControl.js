import React, { Component } from "react";
import EditBtn from "./EditBtn";
import ResubmitBtn from "./ResubmitBtn";

class EditControl extends Component {
    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleResubmitClick = this.handleResubmitClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {isEditing: false, value: this.props.taskText};
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleEditClick() {
        this.setState({isEditing: true});
        // this ensures props at the time of update is applied
        this.setState((state, props) => ({
            value: props.taskText
        }));
    }

    handleResubmitClick(index, value) {
        this.setState({isEditing: false});
        this.props.reSubmitFunc(index, value);
    }

    render() {
        const {taskIndex, taskText} = this.props;

        const isEditing = this.state.isEditing;
        let button;
        if (isEditing) {
            button = <ResubmitBtn onClick={this.handleResubmitClick.bind(this, taskIndex, this.state.value)} />;
        } else {
            button = <EditBtn onClick={this.handleEditClick} />;
        }

        return (
            <div className="edit_control">
                <div>
                    {!isEditing 
                        ? <span> {taskIndex} - {taskText} </span>
                        : <span><input type='text' value={this.state.value} onChange={this.handleChange} /></span>
                    }
                </div>
                {button}
            </div>
        );
    }
}

export default EditControl;