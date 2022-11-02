import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import EditControl from "./EditControl";

// rander tasks
class Overview extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const {tasks, deleteFunc, reSubmitFunc} = this.props;

        return (
            <div className="overview">

                {tasks.map((task, index) => {
                   return <div key={index} className='task'>
                            <EditControl taskIndex={task.count} taskText={task.text} reSubmitFunc={reSubmitFunc}/>
                            <DeleteBtn deleteFunc={deleteFunc.bind(this, task.count)}/>
                          </div>
                })}
                
            </div>
        );
    }

}

export default Overview;