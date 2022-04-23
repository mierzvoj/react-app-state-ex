import React, {Component} from "react";

interface ItemProps {
    id: number;
    value: number;
    handler: (val: number) => void;
}

class Item extends Component<ItemProps> {
    state = {
        hex: this.props.value + "",
        value: this.props.value,
    };

    handleToHexValue(value: number) {
        this.setState({hex: value.toString(16)});
    }

    handleDelete(itemId: number, handlerFn: (val: number) => void) {
        handlerFn(itemId);
    }

    render() {
        return (
            <div>
                <li key={`numbers -${this.props.id}`}> {this.props.value}</li>
                <button onClick={() => this.handleToHexValue(this.props.value)}>
                    Go for Hex {this.state.hex}
                </button>
                <button
                    onClick={() => this.handleDelete(this.props.id, this.props.handler)}
                >
                    Delete
                </button>

            </div>

        );
    }
}

export default Item;
