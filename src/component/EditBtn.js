import React, {Component} from "react";

class EditBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.onClick} className='edit'>EDIT</button>
        );
    }
}

export default EditBtn;