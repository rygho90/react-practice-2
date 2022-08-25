import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, amount, handleDelete } = this.props;
    let currNum = amount - amount;
    const listItems = tasks.map((task) => {
      currNum += 1;
      return (
        <li key={task.key}>
          {currNum}.&nbsp;
          {task.text}
          <button onClick={handleDelete}>DELETE</button>
        </li>
      );
    });

    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Overview;
