import React, { Component } from "react";

class Item extends Component {
  state = {
    hex: this.props.value,
  };

  handleToHexValue(value) {
    // const h = parseInt(value, 10).toSring(16);
    this.setState({ hex: this.state.hex + 1 });
  };

  handleDelete(itemId, hadnlerFn) {
    hadnlerFn(itemId);
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.handleToHexValue(this.props.value)}
        >
          Go for Hex {this.state.hex}
        </button>
        <button onClick={() => this.handleDelete(this.props.id, this.props.handler)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Item;
