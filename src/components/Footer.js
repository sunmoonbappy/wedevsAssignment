import React, {memo} from 'react'

const Footer = (props => {
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
                <strong>2</strong>
                <span></span>
                <span>items</span>
                <span>left</span>
            </span>
            <ul className="filters">
                {
                    FilterBtns.map(btn=>(
                        <FilterBtn key={`btn${btn.title}`} {...btn}/>
                    ))
                }
                <FilterBtn/>
                <FilterBtn/>
                <FilterBtn/>
            </ul>
            <button className="clear-completed">Clear Completed</button>
        </footer>
    )
})

const FilterBtn = (props => {
    const { title,isActive,link,onClick } = props
    return (
        <>
            <li>
                <a 
                 href={`#/${link}`} 
                 className={`${isActive ? 'selected' : ''}`}
                 onClick={onClick}
                >
                    {title}
                </a>
            </li>
            <span></span>
        </>
    )
})

export default Footer;