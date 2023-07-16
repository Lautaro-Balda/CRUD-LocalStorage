import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask } from '../features/tasks/taskSlices'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'

function TaskForm() {
   const [Task, setTask] = useState({
      title: '',
      description: ''
   })
   const tasks = useSelector(state => state.Tasks)
   const dispach = useDispatch()
   const navigate = useNavigate()
   const params = useParams()

   const handleChange = (e) => {
      setTask({
         ...Task,
         [e.target.name]: e.target.value
      })
   }

   useEffect(() => {
      if (params.id) {
         setTask(tasks.find((task) => task.id === params.id))
      }
   }, [params.id, tasks])
   return (
      <form onSubmit={(e) => {
         if (params.id) {
            dispach(editTask(Task))
         } else {
            e.preventDefault()
            dispach(addTask({
               ...Task,
               id: uuid()
            }))
         }
         navigate("/")
      }} className='bg-zinc-800 max-w-sm p-4'>
         <label htmlFor="title" className='block text-xs font-bold mb-2'>Task:</label>
         <input
            type="text"
            name='title'
            placeholder='title'
            onChange={handleChange}
            value={Task.title}
            className='w-full p-2 rounded-md bg-zinc-600 mb-2'
         />
         <label htmlFor="descripion" className='block text-xs font-bold mb-2'>Description:</label>
         <textarea
            name="description"
            placeholder='description'
            onChange={handleChange}
            value={Task.description}
            className='w-full p-2 rounded-md bg-zinc-600 mb-2'
         ></textarea>

         <button className='bg-indigo-600 px-2 py-1'>Save</button>
      </form>
   )
}

export default TaskForm