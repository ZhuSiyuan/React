
/*
StuID: 3119305630
Mail: zhusiyuan@stu.xjtu.edu.cn
Date: 2020/3/25
*/

import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoList from './TodoList';

function App() {
  document.title = 'Todo List @ ZHU Siyuan'
  return (
    <div className="App">
      <TodoListHeader />
      <TodoList />
      <p>
        <code >
          1. Click item above to change it's state.  <br />
          2. Click the Add button to add a new item. <br /> 
          3. Click Remove button to remove those done.
        </code>
      </p>
    </div>
  );
}

export default App;
