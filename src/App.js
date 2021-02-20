import React, {useState, useEffect} from 'react';
import './App.css';

// Components
import Form from './components/Form';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {

  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);
  const [theme, setTheme] = useState("Dark");
  
  // Filtering function
  const filteringHandler = () => {
    switch (filter){
      case "done":
        setfilteredTodos(todos.filter(el => el.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter(el => el.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    };
  };
  useEffect(filteringHandler, [todos, filter]);

  // Saving todos to localStorage
  const saveLocalStorage = () => {
    localStorage.setItem("todosData", JSON.stringify(todos));
  };
  // Getting todos from localStorage and parsing them in a string
  const getLocalTodos = () => {
    let todosLocal;
    if (localStorage.getItem("todosData") === null){
      localStorage.setItem("todosData", JSON.stringify([]));
      todosLocal = localStorage.getItem("todosData");
    }
    else{
      todosLocal = localStorage.getItem("todosData");
    }
    setTodos(JSON.parse(todosLocal));
  };

  // Saving theme to localStorage
  const saveThemeLocal = () => {
    localStorage.setItem('theme', theme);
  };

  // Setting the theme to the one in localStorage
  const setLocalTheme = () => {
    if (localStorage.getItem('theme') === null){
      setTheme("Dark");
    }
    else{
      setTheme(localStorage.getItem('theme'));
    }
  }; 

  // Setting the body class depending on the theme
  const setBodyClass = () => {
    let bodyStyle = document.getElementById("body");
    if (theme === "Dark"){
      bodyStyle.className = "App-dark";
    }
    else{
      bodyStyle.className = "App-colorful";
    }
  };

  // Calling getLocalTodos on page load
  useEffect(getLocalTodos, []);

  // Calling saveLocalStorage each time a state is updated
  useEffect(saveLocalStorage, [todos, filter]);

  // Calling setLocalTheme on load
  useEffect(setLocalTheme, []);

  // Calling saveThemeLocal and setBodyClass ech time the theme is changed
  useEffect(saveThemeLocal, [theme]);
  useEffect(setBodyClass, [theme]);
 
  return (
    <div className="App">
      <header>
        <h1>Simple To-Do App</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setFilter={setFilter} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
