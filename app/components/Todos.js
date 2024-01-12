'use client'
import React, { useEffect } from 'react';
import './Todos.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/action/todosAction';

const Todos = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodos())
    }, [])
    const { isLoading, todos, error } = useSelector((state) => state);
    return (
        <div>
            <h2>My Todos</h2>
            {isLoading && <h4>Loading.............</h4>}
            {error && <h4>{error.message}</h4>}
            <section>
                {todos && todos.map((todo) => {
                    const { id, title } = todo
                    return (
                        <article key={id}>
                            <h3>{id}</h3>
                            <h3>{title}</h3>
                        </article>
                    );

                })}
            </section>

        </div>
    );
};

export default Todos;