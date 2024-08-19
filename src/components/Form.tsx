import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import Button from './Button';

const Form = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current) {
          ref.current.focus();
        }
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(title);
        setTitle('');
    }

    return (
        <form onSubmit={ handleSubmit } className='flex flex-row justify-center p-4'>
            <input 
                type="text" 
                ref={ ref } 
                value={ title } 
                onChange={ handleChange }
                className="border rounded w-72 mr-2 px-3 py-1"
                placeholder='What do you have to do?' />
            <Button
                type="submit"
                disabled= { title.trim() === '' } 
                className={ title.trim() === '' ? 'cursor-not-allowed bg-slate-100' : '' }
            >
                Add
            </Button>
        </form>
    )
}

export default Form;