import React, { useState } from "react";
import axios from 'axios';

function AddTask({todo, setTodo}) {
    
    const [value, setValue] = useState(null)
    const [valueTask, setValueTask] = useState(null)
    let BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

    function saveTodo(e) {
        e.preventDefault()
        if(value && valueTask){
            setTodo (
                [...todo, {
                    id: todo.length + 1,
                    title: value,
                    body: valueTask,
                    status: true
                }]
            )
            axios.post(BASE_URL, todo).then((res)=> {
                console.log(res)
            })
            setValue('')
            setValueTask('')
        }if  (value === '') {
            alert('Заполнить поле title')
        }if (valueTask === '') {
            alert('заполнить поле text')
        }
    }

    return (
        <form className="task" onSubmit={saveTodo}>
            <input className="input__title" type='text' placeholder="title" value={value} onChange={(event) => setValue(event.target.value)} />
            <input className="input__task"  type='text' placeholder="text" value={valueTask} onChange={(event) => setValueTask(event.target.value)}  />
            <button className="btn__save">save</button>
        </form>
    );
};

export default AddTask;