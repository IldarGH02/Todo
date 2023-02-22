import React from "react";
import style from "../../ToDoItem/ToDoItem/style.css"

const ToDoItem = (props) => {
    return (
        <div className="todo__item">
            <div className="todo__descr">
                <p>                    
                    {props.description}
                </p>
            </div>            
            <div className="todo__action">
                <input type="checkbox" 
                    onChange={props.handleChange} 
                    defaultChecked={props.completed}
                    className="todo__input-done"
                />
                <button className="todo__btn" onClick={props.clickDelete}>Удалить</button>     
            </div>           
        </div>
    )
}

export default ToDoItem;