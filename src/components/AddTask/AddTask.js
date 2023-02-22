import React from "react";

const AddTask = (props) => {
    return (
        <div className="todo__input-block">
            <input
                onChange={props.onChangeText} 
                className="todo__input"
                placeholder="Введите дело"  
                onKeyDown={props.handleKeyDown}
                value={props.value}     
            />
            <button className="todo__add-btn"
                onClick={props.onClick}                    
            >
                Добавить дело            
            </button>
        </div>
    )
}

export default AddTask