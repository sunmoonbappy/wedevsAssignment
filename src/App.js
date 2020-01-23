import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './components/store/index'

import Header from './components/Header'
import TodoAppList from './components/TodoAppList'
import TodoApp from './components/TodoApp'
import Footer from './components/Footer'

import './assets/css/style.css'


const filterTodosLeft = (todosList = []) => {
  return todosList.filter(item => !item.isCompleted)
}

class App extends Component{
  state = {
    todosList: [],
    isCheckedAll: false,
    status: 'ALL',
    todoEditingId: ''
  }

  addTodos = (todo = {}) => {
    this.setState(preState => ({
      todosList: [...preState.todosList, todo]
    }))
  }

  markCompleted = (id = '') => {
    const { todosList } = this.state
    let isCheckedAll = true
    const updatedtodosList = todosList.map(item => {
      if ((!item.isCompleted && item.id !== id) || (item.isCompleted && item.id === id)) {
        isCheckedAll = false
      }
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
    this.setState({
      isCheckedAll,
      todosList: updatedtodosList
    })
  }

  checkAll = () => {
    const { todosList, isCheckedAll } = this.state
    const updatedtodosList = todosList.map(item => ({ ...item, isCompleted: !isCheckedAll }))
    this.setState(preState => ({
      isCheckedAll: !preState.isCheckedAll,
      todosList: updatedtodosList
    }))
  }

  clearCompleted = () => {
    this.setState(preState => ({
      todosList: filterTodosLeft(preState.todosList)
    }))
  }

  getEditTodo = (id = '') => {
    this.setState({
      todoEditingId: id
    })
  }

  editTodo = (todo, index) => {
    const { todosList } = this.state
    todosList.splice(index, 1, todo)
    this.setState({ todosList })
  }

  removeTodo = (id = '') => {
    this.setState(prevState => ({
      // todosList: filterByStatus(prevState.todosList, 'REMOVE', id)
    }))
  }

  render(){
    const { todosList, isCheckedAll, status, todoEditingId } = this.state
    return (
      <Provider store={store}>
        <div className="todoapp">
          <Header
            addTodo={this.addTodos}
          />
          <TodoAppList
            // todosList={filterByStatus(todosList, status)}
            // markCompleted={this.markCompleted}
            // checkAll={this.checkAll}
            // isCheckedAll={isCheckedAll}
            // todoEditingId={todoEditingId}
            // getEditTodo={this.getEditTodo}
            // editTodo={this.editTodo}
            // removeTodo={this.removeTodo}
          />
          <Footer
            // activeButton={status}
            // setStatusFilter={(status) => this.setState({ status })}
            // clearCompleted={this.clearCompleted}
            // numOfTodosLeft={filterTodosLeft(todosList).length}
            // numOfTodos={todosList.length}
          />
      </div>
      </Provider>
    );

  }
}

export default App;
