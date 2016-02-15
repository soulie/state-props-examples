import React from 'react';
import stateProps from 'state-props';
import TodoTextInput from './TodoTextInput';

// these "initialState" and "stateMutations" objects
// describe internal state (regular state-props, not redux-state-props)
const initialState = props => ({
    editing : false
});

const stateMutations = {
    edit : () => state => ({editing:true}),
    done : () => state => ({editing:false})
};

function TodoItem({state,text,edit,done,completed,completeTodo,deleteTodo,modifyTodo}) {
    const saveTodo = text => {
        if (text) modifyTodo(text);
        else deleteTodo();
        done();
    };
    if (state.editing) return (
        <li className="editing">
            <TodoTextInput text={text} onSave={saveTodo} store={0} />
        </li>
    );
    else return (
        <li className={completed?"completed":""}>
            <div>
                <input className="toggle" type="checkbox" checked={completed} onChange={completeTodo} />
                <label onDoubleClick={edit}>
                    {text}
                </label>
                <button className="destroy" onClick={deleteTodo}></button>
            </div>
        </li>
    );
}

export default stateProps(initialState,stateMutations)(TodoItem);