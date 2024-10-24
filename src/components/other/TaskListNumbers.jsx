import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex w-auto mt-10 justify-between gap-4 overflow-auto' >
        <div className='p-10 w-[45%] bg-red-300 rounded-xl py-5 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='p-10 w-[45%] bg-yellow-300 rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='p-10 w-[45%] bg-green-300 rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='p-10 w-[45%] bg-blue-300 rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumbers
