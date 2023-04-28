'use client';

import React, { useState } from 'react';

interface CardProps {
  name: string;
}

export default function Card(props: CardProps) {
  const { name } = props;

  const [isTextAreaOpen, setIsTextAreaOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddNewTaskClick = () => {
    if (isTextAreaOpen) {
      if (!newTaskValue) return;
      setTasks([...tasks, newTaskValue]);
      setNewTaskValue('');
    }
    setIsTextAreaOpen(!isTextAreaOpen);

  };

  return (
    <div className='flex flex-col bg-slate-300 p-5 rounded-md min-w-[300px]'>
      <div className='font-semibold'>
        {name}  
      </div>
      <ul className='py-3'>
        {tasks.map((task) => (
          <li className='py-1' key={task}>{task}</li>
        ))}
      </ul>
      {isTextAreaOpen && (
        <textarea
          onChange={(e) => setNewTaskValue(e.target.value)}
          id='message'
          rows={4}
          className='block mt-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Whats your new todo?'
        ></textarea>
      )}
      <button
        onClick={handleAddNewTaskClick}
        className='text-white bg-blue-700 mt-5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        Add {!isTextAreaOpen ? 'new' : ''} task
      </button>
    </div>
  );
}