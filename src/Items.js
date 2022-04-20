import React, { Component } from "react";
import Item from "./Item";

class Items extends Component {
  // const items = [];
  // getRandom = () => Math.floor(Math.random() * 20) + 1;

  // for(let i = 0; i < 10; i++) {
  //   items.push(getRandom());
  // }

  state = {
    items: [
      { id: 1, value: 0 },
      { id: 2, value: 20 },
      { id: 3, value: 45 },
    ],
  };

  handleDelete(itemId) {
    const items = [...this.state.items];
    var index = items.findIndex(i => i.id === itemId);
    if (index !== -1) {
      items.splice(index, 1);
      this.setState({ items });
    }
  }

  deleteHandler = (itemId) => this.handleDelete(itemId);

  render() {
    return (
      <React.Fragment>
        {this.state.items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            handler={this.deleteHandler}
            value={item.value}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Items;
