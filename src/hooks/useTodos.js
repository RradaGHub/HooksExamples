import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        // console.log({ todo });
        const action = {
            type: "ADD_TODO",
            payload: todo,
        };
        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id,
        });
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: id,
        });
    };

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo) => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo

    };

};

export default useTodos
