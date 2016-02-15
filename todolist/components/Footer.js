import React, {PropTypes} from 'react';

function Footer({todos,filters,selectedFilter,filterTodos,clearCompleted}) {
    const itemsLeft = todos.reduce((n,todo)=>todo.completed?n:n+1,0);
    console.log("todos.length:"+todos.length);
    console.log("itemsLeft:"+itemsLeft);
    return (
        <footer className="footer">
            <TodoCount itemsLeft={itemsLeft} />
            <FilterSelector filters={filters} selectedFilter={selectedFilter} select={filterTodos} />
            {todos.length!==itemsLeft ? <ClearButton onClick={clearCompleted} /> : null}
        </footer>
    );
}

function TodoCount({itemsLeft}) {
    return (
        <span className="todo-count">
            <strong>{itemsLeft || 'No'}</strong> {itemsLeft===1?'item':'items'} left
        </span>
    );
}

function FilterSelector({filters,selectedFilter,select}) {
    return (
        <ul className="filters">
            {Object.keys(filters).map(
                key => (
                    <li key={key}>
                        <a className={key === selectedFilter ? "selected" : "" }
                           style={{ cursor: 'pointer' }}
                           onClick = {()=>select(key)}>
                            {filters[key].name}
                        </a>
                    </li>
                )
            )}
        </ul>

    );
}

function ClearButton({onClick}) {
    return (
        <button className="clear-completed" onClick={onClick} >
            Clear completed
        </button>
    );
}

export default Footer;
