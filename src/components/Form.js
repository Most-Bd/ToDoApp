import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos, setFilter}) => {
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
    }
    const filterHandler = (event) => {
        setFilter(event.target.value);
    }
    return (
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={filterHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="uncompleted">Uncompleted</option>
               </select>
            </div>
        </form>
    );
};

export default Form;