import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Task from './components/Task';
import TodoList from './components/TodoList';

function App() {
  let [data, setData] = useState([]);
  const [todo, setTodo] = useState([]);

  let BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
  
  const getTask = async () => {
    return await axios.get(BASE_URL).then((response) => {
      setData(response.data)})
  }

  useEffect(() => {
    getTask();
  }, []);

  const getPatch = async (id, obj) => {
    return await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, obj)
    .then(response => {getTask()})
  }

  const getDelete = async (id) => {
    return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {getTask()})
  }

  return (
    <div className="App">
      <Header/>
      <AddTask todo = {todo} setTodo = {setTodo}/>
      <TodoList todo = {todo} setTodo = {setTodo} />
      <div className='card_wrapper'>
      {data.map((dataItem) => {
          return (
            <Task data={dataItem} key={dataItem.id} getDelete={getDelete} id={dataItem.id} getPatch={getPatch}/>
          );
        })}
      </div>
    </div>
  );
};

export default App;