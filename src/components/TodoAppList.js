import React, {memo} from 'react'
import TodoApp from './TodoApp'
import { connect } from 'react-redux'
import { checkAllTodos } from '../components/store/actions/index'
import { filterByStatus } from './../helpers/todosHelper'

const TodoAppList = memo(props => {
    const { todosList, checkAll, isCheckedAll,checkAllTodos } = props
    return (
        <section className="main">
            <input
                className="toggle-all"
                type="checkbox"
                checked={isCheckedAll}
            />
            <label htmlFor="toggle-all" onClick={checkAllTodos} ></label>
            <ul className="todo-list">
                {
                    todosList.map((todo, index) => <TodoApp index={index} key={todo.id} todo={todo} {...props} />)
                }
            </ul>

        </section>
    )
})

const mapStateToProps = (state) => {
    return {
        todosList:filterByStatus(state.todos.todosList,state.todos.status),
        isCheckedAll:state.todos.isCheckedAll
    }
}

const mapDispatchToProps = {
    checkAllTodos
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoAppList);