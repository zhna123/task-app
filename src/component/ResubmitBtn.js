import React, {Component} from "react";

class ResubmitBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.onClick} className='resubmit'>RESUBMIT</button>
        );
    }
}

export default ResubmitBtn;