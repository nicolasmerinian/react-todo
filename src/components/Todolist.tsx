import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Todo from './Todo';
import { TodoType } from '../types/TodoType';
import Button from './Button';

const initialValues: TodoType[] = [{
    id: nanoid(),
    title: 'Programming and learning!',
    completed: true,
    selected: false
}, {
    id: nanoid(),
    title: 'Clean my room',
    completed: false,
    selected: true
}, {
    id: nanoid(),
    title: 'Work out!',
    completed: false,
    selected: false
}];

const Todolist = () => {
    const [todos, setTodos] = useState(initialValues);

    const addTodo = (title: string): void => {
        const newTodo: TodoType = {
            id: nanoid(),
            title: title,
            completed: false,
            selected: false
        };
        setTodos([...todos, newTodo]);
    }

    const handleCheckChange = (todoId: string) => {
        const newTodos = todos.map((todo: TodoType) => {
            if (todo.id === todoId) {
                todo.selected = !todo.selected;
            }

            return todo;
        });
        setTodos(newTodos);
    }

    const handleCheckClick = (todoId: string) => {
        const newTodos = todos.map((todo: TodoType) => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            }

            return todo;
        });
        setTodos(newTodos);
    }

    const handleDeleteClick = (todoId: string) => {
        setTodos(todos.filter((todo: TodoType) => todo.id !== todoId));
    }

    const handleDeleteAll = () => {
        const newTodos = todos.filter((todo: TodoType) => !todo.selected);
        setTodos(newTodos);
    }

    const handleSelectAll = () => {
        const selected = todos.filter((todo: TodoType) => !todo.selected).length !== 0;

        const newTodos = todos.map((todo: TodoType) => {
            todo.selected = selected;
            return todo;
        });

        setTodos(newTodos);
    }

    const handleSelectAllCompleted = () => {
        const newTodos = todos.map((todo: TodoType) => {
            todo.selected = todo.completed;
            return todo;
        });

        setTodos(newTodos);
    }

    const handleCompletedAllSelected = () => {
        const newTodos = todos.map((todo: TodoType) => {
            todo.completed = todo.selected;
            return todo;
        });

        setTodos(newTodos);
    }

    return (
        <div>
            <Form addTodo={ addTodo }/>
            <div className='flex flex-row justify-center'>
                <Button
                    type=""
                    disabled= { todos.length === 0 } 
                    className={ todos.length === 0 ? 'cursor-not-allowed bg-slate-100' : '' }
                    onClick={ handleSelectAll }
                >
                    Select/Unselect all
                </Button>
                <Button
                    type=""
                    disabled= { todos.length === 0 || todos.filter((todo: TodoType) => todo.completed).length === 0 } 
                    className={ todos.length === 0 || todos.filter((todo: TodoType) => todo.completed).length === 0 ? 'cursor-not-allowed bg-slate-100' : '' }
                    onClick={ handleSelectAllCompleted }
                >
                    Select all completed
                </Button>
                <Button
                    type=""
                    disabled= { todos.length === 0 || todos.filter((todo: TodoType) => todo.selected).length === 0 } 
                    className={ todos.length === 0 || todos.filter((todo: TodoType) => todo.selected).length === 0 ? 'cursor-not-allowed bg-slate-100' : '' }
                    onClick={ handleCompletedAllSelected }
                >
                    Complete all selected
                </Button>
                <Button
                    type=""
                    disabled= { todos.length === 0 || todos.filter((todo: TodoType) => todo.selected).length === 0 } 
                    className={ todos.length === 0 || todos.filter((todo: TodoType) => todo.selected).length === 0 ? 'cursor-not-allowed bg-slate-100' : '' }
                    onClick={ handleDeleteAll }
                >
                    Delete all selected
                </Button>
            </div>
            <ul className='mt-2'>
                { todos.map((todo: TodoType) => (
                    <Todo 
                        key={ todo.id } 
                        todo={ todo } 
                        handleCheckChange={ () => handleCheckChange(todo.id) }
                        handleCheckClick={ () => handleCheckClick(todo.id) }
                        handleDeleteClick={ () => handleDeleteClick(todo.id) }
                    />
                ))}
            </ul>
        </div>
    )
}

export default Todolist;