import React from "react";
import Item from "./Item";

class Items extends React.Component {
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
      { id: 4, value: 45 },
      { id: 5, value: 45 },
      { id: 6, value: 45 },
    ],
  };

  handleDelete(itemId: number) {
    const items = [...this.state.items];
    var index = items.findIndex((i) => i.id === itemId);
    if (index !== -1) {
      items.splice(index, 1);
      this.setState({ items });
    }
  }

  setNewValue() {
    const items = [...this.state.items];
    let newVal = {} as Items;
    newVal.value = 0;
    for (let i = 0; i < items.length; i++) {
      this.setState({ newVal });
    }
  }

  deleteHandler = (itemId: number) => this.handleDelete(itemId);
  setZeroes = () => this.setNewValue();

  render() {
    return (
      <React.Fragment>
        {
          <button type="button" onClick={() => this.setZeroes}>
            Zeroes
          </button>
        }
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
