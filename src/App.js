import React, { Component } from "react";
import Overview from "./component/Overview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {taskInput: {text: '', count: 0}, tasks: []}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReSubmit = this.handleReSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({taskInput: {text: event.target.value, count: 0}});
  }

  handleSubmit(event) {
    event.preventDefault();

    const allTasks = this.state.tasks.concat(this.state.taskInput);
    const numberedTasks = allTasks.map((task, index) => ({text: task.text, count: index}));

    this.setState({taskInput: {text: '', count: 0}, 
                  tasks: numberedTasks});
  }

  handleReSubmit(index, value) {

    // find task from tasks array and replace it
    this.setState({tasks: this.state.tasks.map((item, key) => key === index ? {text: value, count: index} : item)});
  }

  handleDelete(index) {
    const filteredTasks = this.state.tasks.filter(t => t.count !== index);
    const numberedTasks = filteredTasks.map((task, index) => ({text: task.text, count: index}));

    this.setState({tasks: numberedTasks})
        
  }

  render() {
    const {taskInput, tasks} = this.state;
    return (
      <div className="container">
        <div className="title">TASK DISPLAY</div>
        <div className="form_container">
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter input:
              <input type='text' value={taskInput.text} onChange={this.handleChange} />
            </label>
            <input type='submit' value='Submit'/>
          </form>
        </div>  
        <Overview tasks={tasks} deleteFunc={this.handleDelete} reSubmitFunc={this.handleReSubmit} />
      </div>
      
    );
  }
}

export default App;
