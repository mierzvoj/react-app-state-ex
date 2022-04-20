import React, { Component } from "react";

class Item extends Component {
  state = {
    count: this.props.value,
  };

  handleToHexValue = (e) => {
    this.setState({ count: this.state.count.toSring(16) });
  };

  handleDelete(itemId, hadnlerFn) {
    hadnlerFn(itemId);
  }

  render() {
    return (
      <div>
        <button
          onClick={(item) => {
            this.handleToHexValue({ item });
          }}
        >
          Go for Hex
        </button>
        <button onClick={() => this.handleDelete(this.props.id, this.props.handler)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Item;
