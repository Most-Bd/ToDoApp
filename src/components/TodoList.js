import React from 'react';

// Components
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list" >
                {filteredTodos.filter(todo => todo.text !== '').map(
                    todo => <Todo key={todo.id} text={todo.text} 
                    todos={todos} id={todo.id} todo={todo} setTodos={setTodos}/>
                )}
            </ul>
        </div>
    );
};

export default TodoList;