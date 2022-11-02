import React, {Component} from "react";

class DeleteBtn extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const {deleteFunc} = this.props;

        return (
            <button onClick={deleteFunc} className='delete'>
                DELETE
            </button>
        );
    }
}

export default DeleteBtn;