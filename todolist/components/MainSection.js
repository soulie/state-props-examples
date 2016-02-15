import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import {stateProps} from 'redux-state-props';

const FILTERS = {
    SHOW_ALL : {
        name: 'All',
        filter: todo => true
    },
    SHOW_ACTIVE: {
        name: 'Active',
        filter: todo => !todo.completed
    },
    SHOW_COMPLETED: {
        name: 'Completed',
        filter: todo => todo.completed
    }
};

const initialState = {
    filter: 'SHOW_ALL'
};

const stateMutations = {
    filterTodos: selectedFilter => state => ({filter:selectedFilter})
};

function MainSection({state,filterTodos,todos,modifyTodo,completeTodo,deleteTodo,completeAll,clearCompleted}) {
    const filteredTodos = todos.filter(FILTERS[state.filter].filter);
    const nCompleted = todos.reduce((n,todo)=>todo.completed?n+1:n,0);
    return (
        <section className="main">
            {filteredTodos.length ? <ToggleAll completeAll={completeAll} checked={nCompleted===todos.length} /> : null}
            <ul className="todo-list">
                {filteredTodos.map(
                    todo => (
                        <TodoItem
                            key={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            deleteTodo={()=>deleteTodo(todo.id)}
                            completeTodo={()=>completeTodo(todo.id)}
                            modifyTodo={text=>modifyTodo(todo.id,text)}
                            store={0}
                        />
                    )
                )}
            </ul>
            <Footer
                todos={filteredTodos}
                filters={FILTERS}
                selectedFilter={state.filter}
                filterTodos={filterTodos}
                clearCompleted={clearCompleted}
            />
        </section>
    );
}

function ToggleAll({checked,completeAll}) {
    return (
        <input className="toggle-all"
               type="checkbox"
               checked={checked}
               onChange={completeAll} />
    );
}

export default stateProps(initialState,stateMutations)(MainSection);
