import React from 'react'
type Todo= {
    id: string
    task: string
    isCompleted: boolean
}

type TodoProps ={
    todo: Todo
    handleDeleteTodos: (id: string)=>void
    handleCheckTodos:(id: string)=>void
}

const Row = ({todo:{task, isCompleted, id}, handleDeleteTodos, handleCheckTodos}: TodoProps):JSX.Element => {
  return (
    <div className={`
        flex w-full p-4 mb-2 justify-between items-center
        ${isCompleted? 'bg-gray-400' : 'bg-green-300'}`}>
        <p className={`
            ml-2 text-xl font-sans font-medium
            ${isCompleted ? 'text-white line-through' : 'text-gray-700'}`}>
            {task}
        </p>
        <div className="w-1/6 flex justify-between items-center mr-2">
            <button 
                aria-label='Delete a todo'
                className="h-8 w-8 justify-center items-center bg-red-400 hover:bg-red-600 text-white font-bold rounded" 
                onClick={()=>handleDeleteTodos(id)}>
               X 
            </button>
            <input 
                type="checkbox" 
                checked={isCompleted} 
                onChange={()=>handleCheckTodos(id)} 
                className="form-checkbox h-8 w-8"
            />
        </div>
    </div>
  )
}
export default Row