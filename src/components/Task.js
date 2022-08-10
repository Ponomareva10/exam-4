import React from "react";

const Task = ({data, getDelete, getPatch, id}) => {

    return (
        <div className='card'>
          <div className='card_mark'>
            <input type="checkbox" className="inp_mark" />
            <div className='card_title'>{data.title}</div>
          </div>
          <p className='card_task'>{data.body}</p>
          <div className='btn_wrapper'>
            <button className="btn_correct" onClick={() => {getPatch(id)}} > correct</button>
            <button className="btn_delete" onClick={() => {getDelete(id)}} > delete</button>
          </div>
        </div>
    );
};

export default Task;