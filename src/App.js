import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
      tasks: [],
      amount: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logStuff = this.logStuff.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
    this.setState({ amount: this.state.amount + 1 });
    this.setState({ text: "" });
  }

  logStuff() {
    console.log(this.state.tasks);
  }

  handleDelete(e) {
    console.log(e.target.parentNode);
  }

  render() {
    const { text, tasks, amount } = this.state;

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
        <Overview tasks={tasks} amount={amount} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
