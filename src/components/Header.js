import React, { memo,useState } from 'react';
import { connect } from 'react-redux'
import { addTodo } from './store/actions' 

const Header = memo(props => {
    const [text,setText] = useState('');
    const { addTodo } = props;
    const onAddTodo = ( e = {}) => {
        if(e.key === 'Enter' && text){
            console.log("Text",text);
            addTodo({
                id:new Date().valueOf(),
                text,
                isCompleted:false
            })
            setText('')
        }
    }
    return(
        <header className="header">
            <input
                className="new-todo" 
                placeholder="What need to be done ?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={onAddTodo}
            />
        </header>
    )
})

const mapDispatchToProps = {
    addTodo
}

const mapStateToProps = (state) => {
    return {
        isCheckedAll:state.todos.isCheckedAll
    }
}

export default connect(null,mapDispatchToProps)(Header);