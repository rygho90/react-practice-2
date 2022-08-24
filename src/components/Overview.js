import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, amount } = this.props;
    let currNum = amount - amount;
    const listItems = tasks.map((task) => {
      currNum += 1;
      return (
        <li key={task.key}>
          {currNum}.&nbsp;
          {task.text}
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
