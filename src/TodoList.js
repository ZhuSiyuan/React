
import React, {Component} from "react";
import TodoListItem from "./TodoListItem";
import NewItem from "./NewItem";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {content: "eat", done: true},
                {content: "sleep", done: false}
            ]
        };
    }

    // 添加 Item(newItemContent) 到 todoList
    addNewItem = (newItemContent) => {
        this.setState({ todoList:
            [
                ...this.state.todoList,
                {content: newItemContent, done: false}
            ]
        });
    }

    // 从 todoList 中移除 done=true 的 Item
    removeDoneItem = () => {
        let _todoList = this.state.todoList.filter((item)=>{return item.done!==true});
        this.setState({ todoList:
            _todoList
        });
    }

    // Warning: Each child in a list should have a unique key prop.
    //   基本都是因为在循环生成多个组件的时候，没有给组件加上key引起的，
    //   因为dom进行diff对比 没有key值，所以报错警告。。 
    //   此时我们需要循环生成多个组件中，加上key值（唯一值）那么就不会报错了
    // Ref: https://www.jonhuu.com/sample-post/1466.html
    render() {
        return (
            <div>
                {this.state.todoList.map(item => <TodoListItem key={item.content} item={item} />)}
                <NewItem addItem={this.addNewItem} />
                <p><button onClick={this.removeDoneItem} >Remove Done</button></p>
            </div>
        );
    }
}

export default TodoList;