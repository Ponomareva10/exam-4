import React, { useState } from "react";

function TodoList ( {todo, setTodo} ) {

    const [correct, setCorrect] = useState('')
    const [value, setValue] = useState('')
    const [valueTask, setValueTask] = useState('')

    function deleteTodo (id) {
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo)
    }

    function statusTodo (id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function correctTodo (id, title, valueTask) {
        setCorrect (id)
        setValue (title)
        setValueTask(valueTask)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
                item.body = valueTask
            }
            return item
        })
        setTodo(newTodo)
        correctTodo ('')
    }

    return (
        <div>
            {
                todo.map( item => (
                    <div key = {item.id} >
                        {
                            correct === item.id ? <div className="correct__wrapper">
                                <input className="input__correct" value={value} onChange={e =>setValue(e.target.value)} />
                                <input className="input__correct" value={valueTask} onChange={e => setValueTask(e.target.value)}/>
                                <button className="btn__save" onClick= {(e) => saveTodo(item.id)}>save</button>
                            </div> :
                              <div className="card-hend">
                                <div className="card_mark">
                                  <input type="checkbox" className="inp_mark" onChange = { () => statusTodo(item.id)}/>
                                  <div className="card_title">{ item.title}</div>
                                </div>
                                <p className="card_task">{item.body}</p>
                                <div className="btn_wrapper">
                                  <button className="btn_correct" onClick = { () => correctTodo(item.id, item.title, item.body)}> correct</button>
                                  <button className="btn_delete" onClick = { () => deleteTodo(item.id)}> delete</button>
                                </div>
                              </div>
                        }
                    </div>
                ))
            } 
        </div>
    )
}

export default TodoList