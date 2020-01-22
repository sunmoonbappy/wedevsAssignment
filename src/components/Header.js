import React, { memo,useState } from 'react';

const Header = memo(props => {
    const [text,setText] = useState('');
    const {addItem} = props;
    const onAddTodo = ( e = {}) => {
        if(e.key === 'Enter' && text){
            console.log("Text",text);
            addItem({
                id:new Date().valueOf(),
                text,
                isCompleted:false
            })
            setText('')
        }
    }
    return(
        <header className="header">
            <h1>Todos</h1>
            <input className="new-todo" 
                value={text}
                onChange={(e) => setText(e.target.value)}  
                onKeyPress={(e) => onAddTodo(e)} 
            />
        </header>
    )
})

export default Header;