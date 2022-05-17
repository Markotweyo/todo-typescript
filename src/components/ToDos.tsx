import React, {ChangeEvent, FormEvent, useState} from 'react';
import { v4 as uuid } from 'uuid'
import Row from './Row';
import {data} from '../data/todos';
import AddTodo from './AddTodo';

type Todo= {
    id: string,
    task: string,
    isCompleted: boolean
}



const ToDos = () => {
    const [todos, setTodos] = useState<Todo[]>(data);
    const [task, setTask] = useState("")

    const todosLength= todos.length;
    const hasTodos= todosLength>0;
    const remainingTodos=todos.filter((todo)=> !todo.isCompleted).length

    const handleAddTodo=(todo: Todo)=>{
        const updatedTodos=[...todos, todo]
        setTodos(updatedTodos);
        setTask("")
    }
    const handleChange=(e: ChangeEvent)=>{
        const {value}=e.target as HTMLInputElement
        setTask(value)
    }
    const handleSubmit=(e: FormEvent)=>{
        e.preventDefault();
        const todo={
            id:uuid(),
            task:task,
            isCompleted: false
        }
        task && handleAddTodo(todo)
    }

    const handleDeleteTodos=(id: string)=>{
        const updatedTodos=todos.filter((todo)=>todo.id!==id)
        setTodos(updatedTodos)
    }
    const handleCheckTodos=(id: string)=>{
        const updatedTodos=todos.map((todo)=>{
            if (todo.id===id) {
                return {
                    ...todo, isCompleted: !todo.isCompleted
                }
            }
            return todo
        })
        setTodos(updatedTodos)
    }
  return (
    <section className='w-10/12 sm:w-10/11 lg:w-1/2 max-w-2xl flex flex-col items-center'>
        <AddTodo 
            task={task}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
        <div className='h-10'/>
        {todos.map((todo)=>(
           <Row 
                key={todo.id} 
                todo={todo} 
                handleDeleteTodos={handleDeleteTodos}
                handleCheckTodos={handleCheckTodos}
           /> 
        ))}
        {!hasTodos && (
            <p className='mb-5 text-xl text-red-500'>
                Please Add todos
            </p>
        )}
        
        {hasTodos && (
            <p>{`[${remainingTodos} of ${todosLength}] Todos remaining`}</p>
        )}
        
    </section>
  )
}
export default ToDos