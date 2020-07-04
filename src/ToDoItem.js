import React from "react"

function ToDoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input
                // type="checkbox" onClick = {() => props.text.completed}
                   type="checkbox"
                   checked={props.todo.completed}
                   onChange={() => props.handleChange(props.todo.id)}
            />
            <p style={props.todo.completed ? completedStyle : null}>{props.todo.text}</p>
        </div>
    )
}

export default ToDoItem;