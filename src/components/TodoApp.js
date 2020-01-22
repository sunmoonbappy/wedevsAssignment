import React, { memo,useState } from 'react'

const TodoApp = memo(props => {
    const { todo,editlistItem,listEditId,onEditList,index } = props
    const [text,setText] = useState(todo.text)
    const editingList = listEditId === todo.id
    const editList = () =>{
        onEditList({
            ...todo,text
        },index)
    }

    return(
        <li className={`${ editingList ? 'editingList' : '' } ${ todo.isCompleted ? 'completed' : '' }`}>
            {!editingList ? 
                <div className="view">
                <input className="toggle" type="checkbox" checked={todo.isCompleted} />
                <label onClick={ () => editlistItem(todo.id)} >{todo.text}</label>
                <button 
                    className="destroy"  
                >  
                </button>
            </div>
            :
            <input 
                className="edit" 
                type="text" 
                value={text} 
                onChange={e => setText(e.target.value)}
                onBlur={editList}
                onKeyPress={(e) => 
                    {
                        if(e.key === 'Enter') {
                            editList()
                        }
                    }
                }
            />   
        }
        </li>
    )
})

export default TodoApp;