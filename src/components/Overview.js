import React, { Component } from "react";
import TaskItem from "./TaskItem";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, handleDelete, handleEdit } = this.props;

    return (
      <div>
        <ol>
          {tasks.map((task) => {
            return (
              <TaskItem
                key={task.key}
                taskID={task.key}
                text={task.text}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Overview;
