import React, { Component } from "react";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.onEditChange = this.onEditChange.bind(this);
    this.editTask = this.editTask.bind(this);
    this.state = { isEditing: false, taskText: this.props.text };
  }

  deleteTask() {
    this.props.handleDelete(this.props.taskID);
  }

  editTask() {
    this.props.handleEdit(this.props.taskID, this.state.taskText);
    this.setState({ isEditing: false });
  }

  toggleEdit() {
    this.setState({ isEditing: true });
    console.log(this.props);
    console.log(this.state);
  }

  onEditChange(e) {
    this.setState({ taskText: e.target.value });
  }

  render() {
    const { taskID, text } = this.props;
    const isEditing = this.state.isEditing;
    let textField;
    let changeButton;

    if (isEditing) {
      textField = (
        <input
          type="text"
          value={this.state.taskText}
          onChange={this.onEditChange}
        />
      );
      changeButton = <button onClick={this.editTask}>RESUBMIT</button>;
    } else {
      textField = <div>{text}</div>;
      changeButton = <button onClick={this.toggleEdit}>EDIT</button>;
    }

    return (
      <li>
        {/* Conditionally render the below line. If not editing, should be a div. If editing, should be input field. Pass down handleChange to this input field. */}
        {textField}
        <div>{taskID}</div>
        {/* Clicking EDIT toggles button into SUBMIT. The SUBMIT button will need an onClick function similar to delete which updates grandpa state. */}
        {changeButton}
        <button onClick={this.deleteTask}>DELETE</button>
      </li>
    );
  }
}

export default TaskItem;
