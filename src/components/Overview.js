import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;
    const listItems = tasks.map((task) => <li>{task}</li>);

    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Overview;
