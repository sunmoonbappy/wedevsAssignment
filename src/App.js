import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './components/store/index'

import Header from './components/Header'
import TodoAppList from './components/TodoAppList'
import Footer from './components/Footer'

import './assets/css/style.css'


class App extends Component{

  render(){

    return (
      <Provider store={store}>
        <div className="layout">
          <h1>todos</h1>
          <div className="app">
            <Header addTodo={this.addTodos}/>
            <TodoAppList />
            <Footer />
        </div>
        </div>
      </Provider>
    );

  }
}

export default App;
