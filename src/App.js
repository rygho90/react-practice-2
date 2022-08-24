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
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.text);

    const newTask = {
      text: this.state.text,
      key: uniqid()
    }
    this.setState({ tasks: [...this.state.tasks, newTask] });
    this.setState({ text: "" });
  }

  logStuff() {
    console.log(this.state.tasks);
  }

  render() {
    const { text, tasks } = this.state;

    return (
      <div>
        <h1>HELLO</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add New Task:
            <input
              type="text"
              value={text}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.logStuff}>Log Test</button>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
