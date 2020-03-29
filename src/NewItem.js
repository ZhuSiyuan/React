
import React, {Component} from "react";

class NewItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputContent: ''
        };
        this.addItem = props.addItem;
    }

    // input value 内容改变 -> inputContent 改变
    changeInputContent = (event) => {
        this.setState({
            inputContent: event.target.value
        });
    }

    // 点击 Add button -> 添加 Item(inputContent) 到 TodoList，并将 input value 置 ''
    onClickAddBtn = () => {
        this.addItem(this.state.inputContent);
        this.setState({
            inputContent: ''
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.inputContent} onChange={this.changeInputContent}/>
                <button onClick={this.onClickAddBtn}>Add</button>
            </div>
        );
    }
}

export default NewItem;