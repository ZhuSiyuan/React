
import React, {Component} from "react";
import "./TodoListItem.css";

class TodoListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
    }

    changeDoneState = (event) => {
        const _item = this.state.item;
        if (_item.done) {
            _item.done = false;
        } else {
            _item.done = true;
        }
        this.setState({item: _item});
    }

    render() {
        const item = this.state.item;
        if (item.done) {
            return (<p className="item-done" onClick={this.changeDoneState}>{item.content}</p>);
        } else {
            return (<p className="item" onClick={this.changeDoneState}>{item.content}</p>);
        }
    }

    
}

export default TodoListItem;
