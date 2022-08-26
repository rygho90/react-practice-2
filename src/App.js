import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logStuff = this.logStuff.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      text: this.state.text,
      key: uniqid(),
    };
    this.setState({ tasks: [...this.state.tasks, newTask] });
    this.setState({ text: "" });
  }

  logStuff() {
    console.log(this.state.tasks);
  }

  handleDelete(taskID) {
    console.log(taskID);

    let newTasks = this.state.tasks.filter((task) => task.key !== taskID);
    this.setState({ tasks: newTasks });
  }

  handleEdit(taskID, newText) {
    let newTasks = this.state.tasks;
    newTasks.forEach(task => {
      if (task.key === taskID) task.text = newText
    })
    this.setState({ tasks: newTasks });
  }

  render() {
    const { text, tasks } = this.state;

    return (
      <div>
        <h1>HELLO</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add New Task:
            <input type="text" value={text} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.logStuff}>Log Test</button>
        <Overview
          tasks={tasks}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
