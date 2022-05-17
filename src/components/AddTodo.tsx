import React, { ChangeEvent, FormEvent } from 'react';

type AddTodoProps ={
    task: string
    handleChange:(e: ChangeEvent)=>void
    handleSubmit: (e: FormEvent)=>void
}

const AddTodo = ({task, handleChange, handleSubmit}:AddTodoProps) => {
  return (
    <form className="flex justify-between w-full" onSubmit={handleSubmit}>
        <input
            className="flex-1 rounded shadow p-2 text-gray-dark mr-2"
            type="text" 
            name="task" 
            value={task} 
            onChange={handleChange} />
        <button type="submit" aria-label='Add todo'>+</button>
    </form>
  )
}
export default AddTodo