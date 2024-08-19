import { TodoType } from '../types/TodoType';

const Todo = ({ 
    todo, 
    handleCheckChange, 
    handleCheckClick , 
    handleDeleteClick 
}: { 
    todo: TodoType, 
    handleCheckChange: () => {}, 
    handleCheckClick: () => {} , 
    handleDeleteClick: () => {} 
}) => {
    return (
        <li className='flex flex-row align-middle justify-center justify-between px-4'>
            <input type='checkbox' checked={ todo.selected } onChange={ handleCheckChange }/>
            <div className={'mx-1 ' + (todo.completed ? 'line-through' : '')}>{ todo.title }</div>
            <div className='flex flex-row'>
                <div 
                    className={'w-6 h-6 text-center cursor-pointer hover:bg-green-100 ' + (todo.completed ? 'text-green-600' : '')} 
                    onClick={ handleCheckClick }
                >
                    &#x2714;
                </div>
                <div className='w-6 h-6 text-center cursor-pointer hover:bg-red-100 text-red-600'
                    onClick={ handleDeleteClick }
                >
                    &#x2716;
                </div>
            </div>
        </li>
    )
}

export default Todo;