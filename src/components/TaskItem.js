import React, { Component } from "react";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.state = {isEditing: false}
  }

  deleteTask() {
    this.props.handleDelete(this.props.taskID);
  }

  toggleEdit() {
    this.setState({isEditing: true})
  }

  render() {
    const { taskID, text } = this.props;
    const isEditing = this.state.isEditing;
    let textField;
    let changeButton;

    if (isEditing) {
        textField = <input type="text" value={text} />
        changeButton = <button onClick={this.toggleEdit}>RESUBMIT</button>
    } else {
        textField = <div>{text}</div>
        changeButton = <button onClick={this.toggleEdit}>EDIT</button>
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
