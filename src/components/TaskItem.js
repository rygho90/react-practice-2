import React, { Component } from "react";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.logTask = this.logTask.bind(this);
  }

  logTask() {
    this.props.handleDelete(this.props.taskID);
  }

  render() {
    const { taskID, text } = this.props;

    return (
      <li>
        <div>{text}</div>
        <div>{taskID}</div>
        <button onClick={this.logTask}>DELETE</button>
      </li>
    );
  }
}

export default TaskItem;
