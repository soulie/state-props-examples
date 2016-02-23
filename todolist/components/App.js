import React from 'react';
import {stateProps} from 'redux-state-props';

import Header from './Header';
import MainSection from './MainSection';

// initial state: pre-populated with one element:
const initialState = props => props.todos || [{
    id:0,
    completed:false,
    text:"try redux-state-props"
}];

const stateMutations = {
    addTodo: text => state => [{
        id: state.reduce((maxId,todo) => todo.id > maxId ? todo.id:maxId, 0)+1,
        completed: false,
        text:text
    }, ...state],
    modifyTodo: (id,text) => state => state.map (
        todo => todo.id===id ? Object.assign({},todo,{text}) : todo
    ),
    completeTodo: id => state => state.map (
        todo => todo.id===id ? Object.assign({},todo,{completed:!todo.completed}) : todo
    ),
    deleteTodo: id => state => state.filter (
        todo => todo.id!==id
    ),
    completeAll: () => state => {
        const allComplete = state.every(todo=>todo.completed);
        return state.map(todo=>Object.assign({},todo,{completed:!allComplete}));
    },
    clearCompleted: () => state => state.filter (
        todo => todo.completed === false
    )
};

function TodoApp({state,addTodo,deleteTodo,completeTodo,modifyTodo,completeAll,clearCompleted}) {
    return (
        <div>
            <Header
                addTodo={addTodo}
            />
            <MainSection
                todos={state}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                modifyTodo={modifyTodo}
                completeAll={completeAll}
                clearCompleted={clearCompleted}
            />
        </div>
    );
}

export default stateProps(initialState,stateMutations)(TodoApp);
