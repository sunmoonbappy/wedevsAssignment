import React, {memo} from 'react'
import TodoApp from './TodoApp'

const TodoAppList = memo(props => {
    const {todosList} = props;
    return(
       <section className="main">
           <input className="toggle-all" />
           <label htmlFor="toggle-all"></label>
           <ul className="todo-list">
              {
                  todosList.map((todo,index) =><TodoApp key={`todo${todo.id}`} { ...{todo} } {...props} index={index} />)
              }  
           </ul>
       </section> 
    )
})

export default TodoAppList;