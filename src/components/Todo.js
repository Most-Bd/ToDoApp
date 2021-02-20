import React from 'react';

const Todo = ({id, text, todos, todo, setTodos}) => {
    // Deleting and completing
    const handleDelete = () => {
        setTodos(todos.filter(el => el.id !== id));
    };
    const handleCompleted = () => {
        setTodos(todos.map(el => {
            if (el.id === id){
                return {
                    ...el, 
                    completed : !el.completed
                };
            };
            return el;
        }));
    };
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed? 'completed-elements' : ''}`}>{text}</li>
            <button onClick={handleCompleted} className='completed-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={handleDelete} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
};

export default Todo;