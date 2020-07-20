import React from 'react'
import './todo-list-item.css'

const TodoListItem = ({ label, onDeleted, onToogleImportant, onToogleDone, important, done }) => {
             
        let ClassNames = 'todo-list-item' 
        if (done) {
            ClassNames += ' done'
        }
        if (important) {
            ClassNames += ' important'
        }
    
        return (
            <span className={ ClassNames }>
            <span
                className="todo-list-item-label"
                onClick={ onToogleDone }>
              {label}
            </span>
    
            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToogleImportant}>
              <i className="fa fa-exclamation" />
            </button>
    
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
              <i className="fa fa-trash-o" />
            </button>
          </span>
        )
}

export default TodoListItem