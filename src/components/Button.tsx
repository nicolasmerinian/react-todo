import React from 'react';

const Button = ({ 
    children, 
    className,
    disabled, 
    type,
    onClick
}: { 
    children: React.ReactNode, 
    className: string,
    disabled: boolean, 
    type: string,
    onClick: () => {}
}) => {
  return (
    <button 
        type={ type } 
        className={'border rounded mx-1 px-4 py-2 hover:bg-slate-100 ' + className }
        disabled={ disabled }
        onClick={ onClick }
    >
        { children }
    </button>
  )
}

export default Button