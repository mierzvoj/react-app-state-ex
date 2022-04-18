import React, { Component } from "react";

class Item extends Component {
  state = {
    count: this.props.value,
  };

  handleToHexValue = (e) => {
    this.setState({ count: this.state.count.toSring(16) });
  };
  handleDelete(itemId) {
    var array = [...this.state.items];
    var index = array.indexOf(itemId.value);
    if (index !== -1) {
      array.splice(index);
      this.setState({ items: array });
    }
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
        <button onClick={() => this.props.handleDelete(this.props.item.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Item;
