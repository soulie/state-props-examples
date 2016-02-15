import React, {PropTypes} from 'react';
import TodoTextInput from './TodoTextInput';

function Header({addTodo}) {
    return (
        <header className="header">
            <h1>todos</h1>
            <TodoTextInput newTodo onSave={addTodo} store={null} />
        </header>
    );
}

Header.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default Header;
