import React from 'react';
import stateProps from 'state-props';

const initialState = props => ({
    tempText: props.text || ''
});

const stateMutations = {
    updateText: text => state => ({tempText:text})
};

function TodoTextInput({state,updateText,newTodo,onSave}) {
    const change = e => updateText(e.target.value);
    const keyDown = e => {
        if (e.which===13) {
            onSave(e.target.value.trim());
            updateText('');
        }
    };
    const blur = e => onSave(e.target.value.trim());
    if (newTodo) return (
        <input
            className = 'new-todo'
            autoFocus = "true"
            placeholder = "What needs to be done?"
            value = {state.tempText}
            onChange = {change}
            onKeyDown = {keyDown}
        />
    );
    else return (
        <input
            className = "edit"
            autoFocus = "true"
            value = {state.tempText}
            onChange = {change}
            onKeyDown = {keyDown}
            onBlur = {blur}
        />
    );
}

export default stateProps(initialState,stateMutations)(TodoTextInput);
