import React, {memo} from 'react'
import { filterByStatus } from '../helpers/todosHelper'
import { connect } from 'react-redux'
import { setStatusFilter,clearCompleted } from './../components/store/actions'

const Footer = memo((props) => {
    const { setStatusFilter, activeButton, clearCompleted, numOfTodosLeft, numOfTodos } = props
    const FilterBtns = [{
        title:'All',
        isActive:true,
        onClick:() => {},
        link:''
    },{
        title:'Active',
        isActive:false,
        onClick:() => {},
        link:'/active'
    },{
        title:'Completed',
        isActive:false,
        onClick:() => {},
        link:'/completed'
    }]
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{numOfTodosLeft}</strong>
                <span> </span>
                <span>{numOfTodosLeft > 1 ? 'items' : 'item'}</span>
                <span> left</span>
            </span>
            <ul className="filters">
                <li>
                    <a
                        href="#/"
                        className={`${activeButton === 'ALL' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('ALL')}
                    >
                        All
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/active"
                        className={`${activeButton === 'ACTIVE' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('ACTIVE')}
                    >
                        Active
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/completed"
                        className={`${activeButton === 'COMPLETED' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('COMPLETED')}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            {
                numOfTodosLeft < numOfTodos && <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
            }
        </footer>
    )
})

const mapStateToProps = (state) => {
    const {todosList,status} = state.todos
    return {
        status,
        numOfTodos:todosList.length,
        numOfTodosLeft:filterByStatus(todosList,'ACTIVE').length
    }
}

const mapDispatchToProps = {
    setStatusFilter,
    clearCompleted
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);