import React, {useState} from "react";
import Item from "./Item";

class Items extends React.Component {



    state = {
        items: [
            {id: 1, value: Math.floor(Math.random() * 20) + 1},
            {id: 2, value: Math.floor(Math.random() * 20) + 1},
            {id: 3, value: Math.floor(Math.random() * 20) + 1},
            {id: 4, value: Math.floor(Math.random() * 20) + 1},
            {id: 5, value: Math.floor(Math.random() * 20) + 1},
            {id: 6, value: Math.floor(Math.random() * 20) + 1},
            {id: 7, value: Math.floor(Math.random() * 20) + 1},
            {id: 8, value: Math.floor(Math.random() * 20) + 1},
            {id: 9, value: Math.floor(Math.random() * 20) + 1},
            {id: 10, value: Math.floor(Math.random() * 20) + 1},
        ],
    };

    handleDelete(itemId: number) {
        const items = [...this.state.items];
        var index = items.findIndex((i) => i.id === itemId);
        if (index !== -1) {
            items.splice(index, 1);
            this.setState({items});
        }
    }

    refreshThePage(): void{
        window.location.reload();
    }


    deleteHandler = (itemId: number) => this.handleDelete(itemId);

    refreshHandler =() => this.refreshThePage();

    render() {
        return (
            <>

                {this.state.items.map((item) => (
                    <Item
                        // key={item.id}
                        id={item.id}
                        handler={this.deleteHandler}
                        value={item.value}

                    />

                ))}
                <button onClick={ () => this.refreshThePage()}>Refresh</button>
            </>
        );
    }
}

export default Items;
