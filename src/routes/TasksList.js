import React from 'react'
import {Link } from 'react-router-dom'

import pinPng from './../img/pin.png'


const TasksList = () => {
    const [tasks, setTasks] = React.useState(  JSON.parse(localStorage.getItem('tasks')) || [])
    const [inputValue, setInputValue] = React.useState('')
    const [taskEdit, setTaskEdit] = React.useState(null)
    const [editText, setEditText] = React.useState('')

    React.useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
   }, [tasks])
    
    const AddTask = () => {
      if (inputValue.trim() !== '') {
        const newTask = {
          id: Math.floor(Math.random() * 100),
          text: inputValue,
          completed: false
        }
        setTasks([...tasks, newTask])
        setInputValue('')
      }
    }

    const DelTask = (id) => {
       setTasks(tasks.filter((elem) => elem.id !== id))
    }

    const EditTask = (id) => {
      if (editText.trim() !== '') {
        const newEditTask = [...tasks].map((elem) => {
          if (elem.id === id) {
            elem.text = editText
          }
          return elem
        })
      setTasks(newEditTask)
      setTaskEdit(null)
      setEditText('')
      }
    }

    const CompleteTask = (id) => {
      const newCompleteTask = [...tasks].map((elem) => {
        if (elem.id === id) {
          elem.completed = !elem.completed
        }
        return elem
      })
      setTasks(newCompleteTask)
    }

    const EnterPush = (e) => {
        if (e.key === 'Enter') {
          AddTask()
        }
    }

      return (
        <div className="Task_app">
         <div className="Task__form">
          <div className="Task__length">Кількість завдань: {tasks.length}</div>
          <input placeholder="   Назва задачі..." className="Task__input" type="text" 
          onKeyPress={EnterPush}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
         <button className="Task__button" onClick={AddTask}>Створити</button>
         <img className="img" src={pinPng} alt="1211" /> 
         {tasks.length === 0 && <div className="Task__length">Задачі відсутні</div>}
        {tasks.map((elem) => {
           return (
             <div key={elem.id}>
                <div className="Task__list">
                {taskEdit === elem.id ? (
                <input className="Task__input-edit Task__input" type="text" 
                  value={editText} 
                  onChange={(e) => setEditText(e.target.value)}
                />) :  (
                  
                <li className={elem.completed ? "text-completed" : "text-uncompleted"}>
                 {elem.text}
                </li>
          
                )}
                <button className="btn__Del" onClick={() => DelTask(elem.id)}>X</button>
              {taskEdit === elem.id ?
               (<button className="Task__button" onClick={() => EditTask(elem.id)}>Підтвердити</button>) : 
               (<div>
                 <button className="btn__Edit" onClick={() => setTaskEdit(elem.id)}>Змінити</button> 
                 <button className="btn__Comp"  onClick={() => CompleteTask(elem.id)}>Виконано</button> 
               </div>
               )}
               </div>
             </div>
           )
         })}
          <button className="page-btn" >
            <Link className="link-button" to="/about">Інша сторінка</Link>
           </button>
          </div>
        </div>
      );
}

export default TasksList