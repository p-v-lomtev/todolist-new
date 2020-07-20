import React from 'react'
import TodoListItem from '../todo-list-item/'

const TodoList = ({ items, onDelete, onToggleImportant, onToggleDone }) => {

    const elements = items.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li className="list-group-item" key={id}>
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDelete(id)}
                    onToogleDone={() => onToggleDone(id)}
                    onToogleImportant={() => onToggleImportant(id)}
                />
            </li>
        )
    })
    return <ul className="list-group"> { elements } </ul>
}
  
export default TodoList