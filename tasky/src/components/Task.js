import React from 'react';

const Task = (props) => {

    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p  className='description'>{props.description}</p>
            <p className="deadline">{props.deadline}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Task;