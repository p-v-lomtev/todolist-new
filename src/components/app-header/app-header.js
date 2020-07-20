import React from 'react'
import './app-header.css'

const AppHeader = ({ toDo, done}) => {
    return (
    <div className="app-header d-flex">
        <h1>Список задач</h1>
            <h2>В работе: {toDo} </h2>
            <h2>Выполнено: {done}</h2>
    </div>
    )
}
  
export default AppHeader