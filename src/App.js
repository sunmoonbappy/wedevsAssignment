import React, { Component } from 'react'
import Header from './components/Header'
import TodoAppList from './components/TodoAppList'
import Footer from './components/Footer'

import './assets/css/style.css'

class App extends Component{
  state = {
    todosList:[{
      id:1,
      text:'todo 1',
      isCompleted:true
    },{
      id:2,
      text:'todo 2',
      isCompleted:false
    }],
    listEditId:''
  }

  editlistItem = (id = '') => {
    this.setState({
      listEditId:id
    })
  }

  onEditList = (todo = {},index = -1) =>{
    if (index >= 0) {
      const { todosList:list } = this.state;
      list.splice(index,1,todo)
      this.setState({
        todosList:todo
      })
    }
  }


   addItem = (todo = {}) =>{
    this.setState(preState =>({
      todosList:[...preState.todosList,todo]
    }))
    
  }

  render(){
    const {todosList,listEditId} = this.state;
    
    return(
        <div className="App">
          <Header addItem={this.addItem}/>
          <TodoAppList 
            todosList={todosList}
            editlistItem={this.editlistItem} 
            listEditId={listEditId}
            onEditList={this.onEditList}
            />
          <Footer />
        </div>
    );
  }
}

export default App;
