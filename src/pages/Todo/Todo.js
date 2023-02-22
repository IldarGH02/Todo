import React, { useEffect, useState } from "react";
import ToDoItem from "../../components/ToDoItem/ToDoItem";
import todosData from "../../components/ToDoItem/todosData"
import AddTask from "../../components/AddTask/AddTask"

const Todo = () => {
    const [todos, setTodos] = useState(
        localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : todosData)
    const [value, setValue] = useState('')

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        console.log(todos)
    }, [todos])
           
    const handleChange = e => {
        setValue(e.currentTarget.value)
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            addNewTask(e)
        }
    }

    const onClickDel = id => {
        setTodos(todos.filter(task => {
            return task.id !== id
        }))
    }

    const handleCompleted = id => {
        setTodos(todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const generateId = () => {
        let id = Date.now()
        return id
    }

    const addNewTask = (e) => {
        e.preventDefault()
        if(value) {
            setTodos([...todos, {
                id: generateId(),
                text: value,
                completed: false
            }])  
            setValue("")      
        } 
    }

    const todoItems = todos;
    const activeTasks = todoItems.filter(task => task.completed === false)
    const completedTasks = todoItems.filter(task => task.completed === true)
    const finalTasks = [...activeTasks, ...completedTasks].map((todo, idx) => {
        return <ToDoItem
            description={todo.text}
            key={todo.id}
            completed={todo.completed}
            handleChange={() => handleCompleted(todo.id)}
            clickDelete={() => onClickDel(todo.id)}          
        />
    })
      
    return (
        <div className="container">
            <div className="todo__content">
                <AddTask
                    onChangeText={(e) => handleChange(e)}
                    onClick={addNewTask}
                    handleKeyDown={handleKeyDown}
                    value={value}
                />                
                {finalTasks}                
            </div>
        </div>
    )
}

export default Todo

